"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export function Card() {
    return (
        (<div className="w-full">
            <PinContainer title="Rotary Engine" href="https://auto.howstuffworks.com/rotary-engine.htm">
                <div
                    className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[400px] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100">
                    Inside the Rotary Revolution 🔥
                    </h3>
                    <div className="text-sm">
                        <span className="text-amber-300">
                        Unlike piston engines, rotary engines spin smoothly for efficient, unique power delivery. Watch it in action!
                        </span>
                    </div>
                    <img
                        src="../images/Car Racing GIF by kneapolitan.gif"
                        alt="Rotary Engine Animation"
                        className="h-full object-contain rounded-xl mt-3"
                    />
                </div>
            </PinContainer>
        </div>)
    );
}
