import * as IconModule from "./icons";
import MenuEntry from "./MenuEntry/MenuEntry";
import Accordion from "./Accordion/Accordion";
import { links } from "./MenuEntry/config";
import type { PushedProps } from "@/app/types/types";

const Icons = IconModule as unknown as {
  [key: string]: React.FC<React.SVGProps<SVGElement>>;
};

export default function PanelBody({ isPushed, onClick }: PushedProps) {
  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden h-full">
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" />;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              icon={iconElement}
              label={entry.label}
            >
              {isPushed &&
                entry.items.map((item) => {
                  return (
                    <MenuEntry
                      key={item.href}
                      href={item.href}
                      onClick={onClick}
                    >
                      {item.label}
                    </MenuEntry>
                  );
                })}
            </Accordion>
          );
        }

        return (
          <MenuEntry key={entry.label} href={entry.href} onClick={onClick}>
            {iconElement}
            {entry.label}
          </MenuEntry>
        );
      })}
    </div>
  );
}
