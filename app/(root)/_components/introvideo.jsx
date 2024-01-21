import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { YoutubeIcon } from "lucide-react";

const Introvideo = () => {
  return (
    <div className="flex w-full justify-center ">
      <Dialog>
        <DialogTrigger className="text-idaclass px-2 rounded-2xl flex text-2xl font-bold items-center gap-2 shadow-[0_0px_40px_20px_rgba(255,255,255,0.6)] bg-gray-300">
          <YoutubeIcon size={40}/> Conoce Idaclass
        </DialogTrigger>
        <DialogContent className="pt-12 bg-zinc-800 bg-opacity-95 border-none">
        <YouTubeEmbed videoid="kfLDLD653zM"/>
         
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Introvideo;
