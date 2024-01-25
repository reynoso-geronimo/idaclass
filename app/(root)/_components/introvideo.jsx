import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { YoutubeIcon } from "lucide-react";

const Introvideo = () => {
  return (
    <div className="flex w-full justify-center">
      <Dialog>
        <DialogTrigger >
          <div className="rounded-2xl font-bold flex items-center gap-2 bg-primary text-white px-4 py-1">
            <YoutubeIcon size={32} /> Conoce IdaClass
          </div>
        </DialogTrigger>
        <DialogContent className="pt-12 bg-zinc-800 bg-opacity-95 border-none">
          <YouTubeEmbed videoid="kfLDLD653zM" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Introvideo;
