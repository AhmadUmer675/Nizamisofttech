import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "../../Components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../Components/ui/drawer";

//!For test purpose

const Popup = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-blue">
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent className="grid place-items-center">
        <div className="w-full max-w-[1100px] h-[80vh] mx-auto bg-white">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Popup;
