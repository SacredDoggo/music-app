import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useUserProfile } from "@/hooks/use-user-profile";


export const UserProfileModal = () => {
  const userProfile = useUserProfile();
  return (
    <Dialog open={userProfile.isOpen} onOpenChange={userProfile.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Will be implemented soon.</DialogTitle>
          <DialogDescription>
            Please have patience.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  );
}