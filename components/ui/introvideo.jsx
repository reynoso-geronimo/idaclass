import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import { YoutubeIcon } from "lucide-react";

const Introvideo = ({videoid = "kfLDLD653zM",texto = "Conoce IdaClass",className,}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "rounded-2xl font-bold flex items-center gap-2 text-idaclass4",
          className
        )}
      >
        <YoutubeIcon size={32} /> {texto}
      </DialogTrigger>
      <DialogContent className="pt-12 bg-zinc-800 bg-opacity-95 border-none">
        <YouTubeEmbed videoid={videoid} />
      </DialogContent>
    </Dialog>
  );
};

export default Introvideo;
