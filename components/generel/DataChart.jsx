"use client";
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default function Datachart() {
  return (
    <section className=" px-8 md:px-0 md:my-32 md:max-w-7xl md:mx-auto">
      <div className="flex p-10 rounded-lg bg-ogPrimary-lightest">
        <Card className="flex-1 bg-ogBG-base m-2 p-4 rounded shadow">
          <CardHeader>
            <CardTitle>Follower stats</CardTitle>

            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Create project</Button>
          </CardContent>
        </Card>
        <Card className="flex-1 bg-ogBG-base m-2 p-4 rounded shadow">
          <CardHeader className="flex flex-row gap-2 items-center">
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/profile.webp" alt="@shadcn" />
                <AvatarFallback>OG</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <CardTitle>Outdoor Ginger</CardTitle>
              <p> @outdoorgingerchannel</p>
              <div>Loaction:France</div>
            </div>
          </CardHeader>
          <div className="flex flex-row justify-between gap-4 p-6">
            <div className="flex flex-row gap-2 ">
              <Avatar>
                <AvatarImage src="/profile.webp" alt="@shadcn" />
                <AvatarFallback>OG</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-bold">380K</p>
                <p>Followers</p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <Avatar>
                <AvatarImage src="/profile.webp" alt="@shadcn" />
                <AvatarFallback>OG</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-bold">124</p>
                <p>Posts</p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <Avatar>
                <AvatarImage src="/profile.webp" alt="@shadcn" />
                <AvatarFallback>OG</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-bold">954</p>
                <p>Likes</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="flex-1 bg-ogBG-base m-2 p-4 rounded shadow">
          <div className="flex flex-row p-6 gap-4">
            <div className="flex flex-col justify-stretch">
              <h3>Total Audience</h3>
              <div>
                <p className="font-bold text-xl">20.000</p>
                <Avatar>
                  <AvatarImage src="/profile.webp" alt="@shadcn" />
                  <AvatarFallback>OG</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>Holy moly</p>
              </div>
              <div>
                <p>chart</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
