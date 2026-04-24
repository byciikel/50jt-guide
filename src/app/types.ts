export type AppTab = "setup" | "play" | "cards" | "about";

export type CardType = "danger" | "action" | "safe" | "passive" | "special";

export interface CardData {
  name: string;
  type: CardType;
  icon: string;
  bg: string;
  desc: string;
  note?: string;
}
