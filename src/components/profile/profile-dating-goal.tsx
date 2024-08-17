import { DatingGoal } from "@/types/dating-goal";

type ProfileDatingGoalProps = {
  datingGoal: DatingGoal;
};

export default function ProfileDatingGoal({
  datingGoal: { textColor, bgColor, emoji, title },
}: ProfileDatingGoalProps) {
  return (
    <div
      className="p-2 rounded-[8px] flex items-center gap-x-2 w-max"
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      <span className="text-[32px]">{emoji}</span>
      <div className="flex flex-col">
        <span className="text-sm">Looking for</span>
        <span className="font-semibold text-base">{title}</span>
      </div>
    </div>
  );
}
