"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function UpdateProfile() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    setIsUpdated(true);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="pen_cont h-10 w-10 rounded-full bg-[#3E7C1F] flex items-center justify-center">
          <Edit className="pen" color="white" size={15} />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            {isUpdated ? "Profile Updated" : "Update Profile Picture"}
          </DialogTitle>
          <DialogDescription>
            {isUpdated
              ? "Your profile picture has been successfully updated and saved."
              : "Ensure your photo is appropriate and up to date."}
          </DialogDescription>
          {isUpdated ? (
            <></>
          ) : (
            <>
              {imagePreview ? (
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={imagePreview}
                    alt="Profile Preview"
                    width={400}
                    height={400}
                    className="rounded-full w-50 h-50"
                  />
                </div>
              ) : (
                <div className="text-center text-gray-500 text-sm">
                  <div className="flex w-full justify-center items-center">
                    <DotLottieReact
                      className=" h-40 w-auto"
                      loop
                      autoplay
                      src="/default_profile.lottie"
                    ></DotLottieReact>
                  </div>
                  <p>No image selected.</p>
                </div>
              )}

              <div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <Button onClick={handleUpdate} className="bg-[#0B6540]">Update Profile Picture</Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
