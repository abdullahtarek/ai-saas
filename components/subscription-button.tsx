"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtoProps {
    isPro: boolean
};

const SubscriptionButton = ({isPro}:SubscriptionButtoProps) => {
    const [loading,setLoading] = useState(false);

    const onClick = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
  
    return (
    <Button onClick={onClick} disabled={loading} variant={isPro ? "default" : "premium"}>
        {isPro ? "Manage Subscription" : "Upgrade"}
        {!isPro && <Zap className="w-4 h-4 ml-2 fill-white"/> }
    </Button>
  )
};

export default SubscriptionButton;
