import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EditProfile({
  user,
}: {
  user: {
    name: string;
    email: string;
    bio: string;
    profileImage: string;
    taxiNumber: string;
    workingArea: string;
    hasBillboard: boolean;
    taxiSpec: string;
  };
}) {
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      // Additional image upload logic if needed
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3/4">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-4">
            <Label htmlFor="profileImage" className="text-center">
              Profile Image
            </Label>
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <Input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue={user.name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue={user.email} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taxiNumber" className="text-right">
              Taxi Number
            </Label>
            <Input id="taxiNumber" defaultValue={user.taxiNumber} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="workingArea" className="text-right">
              Working Area
            </Label>
            <Input id="workingArea" defaultValue={user.workingArea} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hasBillboard" className="text-right">
              Has Billboard
            </Label>
            <Input id="hasBillboard" defaultValue={user.hasBillboard ? "Yes" : "No"} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taxiSpec" className="text-right">
              Taxi Specification
            </Label>
            <Input id="taxiSpec" defaultValue={user.taxiSpec} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
