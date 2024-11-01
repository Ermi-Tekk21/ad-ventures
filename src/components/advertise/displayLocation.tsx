import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DisplayLocation({ location }: { location: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm text-slate-800 dark:text-slate-300" variant="outline">View map</Button>
      </DialogTrigger>
      <DialogContent className="w-full p-4">
        <iframe
          src={location}
          width="450"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg opacity-80"
        ></iframe>
      </DialogContent>
    </Dialog>
  )
}
