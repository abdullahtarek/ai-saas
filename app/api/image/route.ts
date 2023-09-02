import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from 'openai';
import { increaseApiLimit,checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
  });

export async function POST(
    req: Request
) {
    try{
        const {userId} = auth();
        const body = await req.json();
        const {prompt,amount=1,resolution="512X512"} = body;

        if (!userId){
            return new NextResponse("Unauthorized",{status:401});
        }

        if(!process.env.OPENAI_API_KEY){
            return new NextResponse("OpenAI API key not configured", {status:500});
        }
        
        if (!prompt) {
            return new NextResponse("prompt are required",{status:400});
        }

        if (!amount) {
            return new NextResponse("amount are required",{status:400});
        }

        if (!resolution) {
            return new NextResponse("resolution are required",{status:400});
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired.", {status: 403});
        }

        const response = await openai.images.generate({
            prompt,
            n: parseInt(amount,10),
            size: resolution,
        })

        if(!isPro){
            await increaseApiLimit();
        }

        return NextResponse.json(response.data);

    } catch (error) {
        console.log("[Image_ERROR]",error);
        return new NextResponse("Internal error",{status: 500})
    }

}