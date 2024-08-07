import cn from "classnames";
import TURBO_TEAM from "@/content/team";
import type { Author } from "@/content/team";
import { Avatar } from "./Avatar";

export function Authors({
  authors,
  date,
  readTime,
}: {
  authors: Author[];
  date: string;
  readTime: string;
}) {
  const validAuthors = authors.filter((author) => TURBO_TEAM[author]);
  return (
    <div className="w-full border-b border-gray-400 authors border-opacity-20">
      <div
        className={cn(
          "flex flex-wrap justify-center py-8 mx-auto gap-7",
          authors.length > 4 && "max-w-3xl",
        )}
      >
        {validAuthors.map((username) => (
          <Avatar
            date={date}
            readTime={readTime}
            key={username}
            {...TURBO_TEAM[username]}
          />
        ))}
      </div>
    </div>
  );
}
