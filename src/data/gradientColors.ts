export interface GradientColor {
  id: number;
  color: string;
  gradient: string[];
  name: string;
}

export const gradientColors: GradientColor[] = [
  {
    id: 0,
    color: "#FE6860",
    gradient: ["#FE6860", "#FE8A71", "#D9BBAE", "#F3C9BF"],
    name: "Sweetie",
  },
  {
    id: 1,
    color: "#477459",
    gradient: ["#477459", "#2483A5", "#6E9091", "#E4D5B9"],
    name: "Duncan",
  },
  {
    id: 2,
    color: "#b9beff",
    gradient: ["#c3e4ff", "#6ec3f4", "#eae2ff", "#b9beff"],
    name: "Goddess",
  },
  {
    id: 3,
    color: "#E74C3C",
    gradient: ["#D1D5D8", "#3498DB", "#E74C3C", "#F1C40F"],
    name: "Clown",
  },
];
