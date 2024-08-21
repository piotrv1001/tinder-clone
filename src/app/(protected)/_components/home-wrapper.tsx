"use client";

import { getPotentialMatchesAction } from "@/actions/get-potential-matches-action";
import { handleSwipeAction } from "@/actions/handle-swipe-action";
import MatchSlider from "@/components/home/match-slider";
import { UserWithImages } from "@/data/repo/user-repo";
import { useRef, useState } from "react";
import MatchModal from "./match-modal";
import { useUser } from "@/hooks/use-user";

type HomeWrapperProps = {
  initialUsers: UserWithImages[];
};

export default function HomeWrapper({ initialUsers }: HomeWrapperProps) {
  const user = useUser();
  const [users, setUsers] = useState<UserWithImages[]>(initialUsers);
  const [matchedUser, setMatchedUser] = useState<UserWithImages | null>(null);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const page = useRef(1);

  const currentUser = users.length > 0 ? users[0] : null;

  const handleSwipe = async (action: "like" | "rejection") => {
    if (!currentUser?.id) return;

    const swiperRes = await handleSwipeAction(currentUser.id, action);
    if (swiperRes.status === "error") return;

    if (swiperRes.data.isMatch) {
      setMatchedUser(currentUser);
      setShowMatchModal(true);
    } else {
      setMatchedUser(null);
    }
    // When we are running out of users (only 3 left), we need to fetch more
    if (users.length < 3) {
      page.current++;
      const newUsers = await getPotentialMatchesAction(page.current);
      if (newUsers.status === "error") return;

      setUsers([...users.slice(1), ...newUsers.data]);
    } else {
      setUsers(users.slice(1));
    }
  };

  return (
    <>
      {showMatchModal &&
        user?.image &&
        matchedUser?.images &&
        matchedUser.images.length > 0 &&
        matchedUser?.name && (
          <MatchModal
            open={showMatchModal}
            onOpenChange={(open) => setShowMatchModal(open)}
            userImageUrl={user.image}
            matchImageUrl={matchedUser.images[0].url}
            matchName={matchedUser.name}
          />
        )}
      {currentUser ? (
        <MatchSlider
          user={currentUser}
          onLike={() => handleSwipe("like")}
          onReject={() => handleSwipe("rejection")}
        />
      ) : (
        <NoUsersPlaceholder />
      )}
    </>
  );
}

function NoUsersPlaceholder() {
  return (
    <div className="w-[375px] h-[667px] flex justify-center items-center flex-col gap-y-2 border border-dashed border-[#3c444f] rounded-[8px]">
      <div className="text-white font-semibold text-2xl">No more users</div>
      <div className="text-[#7c8591] text-sm">Please come back later</div>
    </div>
  );
}
