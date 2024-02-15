import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { YoutubeIcon } from "lucide-react";

const Introvideo = () => {
  return (
    
      <Dialog>
        <DialogTrigger >
          <div className="rounded-2xl font-bold flex items-center gap-2 text-idaclass4">
            <YoutubeIcon size={32} /> Conoce IdaClass
          </div>
        </DialogTrigger>
        <DialogContent className="pt-12 bg-zinc-800 bg-opacity-95 border-none">
          <YouTubeEmbed videoid="kfLDLD653zM" />
        </DialogContent>
      </Dialog>
   
  );
};

export default Introvideo;
