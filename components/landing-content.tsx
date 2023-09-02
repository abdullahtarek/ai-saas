"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Antonio",
        avatar: 'A',
        title: "Softare Engineer",
        description: "This is the best application I've used!"
    },
    {
        name: "Maria",
        avatar: 'M',
        title: "Product Manager",
        description: "I'm passionate about creating innovative products."
    },
    {
        name: "John",
        avatar: 'J',
        title: "Data Scientist",
        description: "I love extracting insights from complex data sets."
    },
    {
        name: "Emily",
        avatar: 'E',
        title: "UX Designer",
        description: "Creating delightful user experiences is my specialty."
    },
    {
        name: "Alex",
        avatar: 'X',
        title: "Frontend Developer",
        description: "I enjoy crafting responsive and user-friendly interfaces."
    },
    {
        name: "Sophia",
        avatar: 'S',
        title: "Marketing Specialist",
        description: "Helping brands reach their audience in creative ways."
    },
    {
        name: "Daniel",
        avatar: 'D',
        title: "Systems Architect",
        description: "Designing scalable and reliable software architectures."
    },
    {
        name: "Isabella",
        avatar: 'I',
        title: "Graphic Designer",
        description: "Bringing ideas to life through visually stunning designs."
    },
    {
        name: "William",
        avatar: 'W',
        title: "AI Researcher",
        description: "Exploring the frontiers of artificial intelligence."
    },
    {
        name: "Ava",
        avatar: 'V',
        title: "Cybersecurity Analyst",
        description: "Securing digital assets from modern cyber threats."
    },
    {
        name: "Michael",
        avatar: 'M',
        title: "Mobile App Developer",
        description: "Building mobile apps that simplify people's lives."
    }
    
]


const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
            <Card key={item.description}
               className="bg-[#192339] border-none text-white"
            >
                <CardHeader>
                    <CardTitle className="flex items-center gap-x-2">
                        <div>
                            <p className="text-lg ">
                                {item.name}
                            </p>
                            <p className="text-zinc-400 text-sm">
                                {item.title}
                            </p>
                        </div>
                    </CardTitle>
                    <CardContent className="pt-4 px-0">
                        {item.description}
                    </CardContent>
                </CardHeader>

            </Card>
        ))};

      </div>
    </div>
  )
};

export default LandingContent;
