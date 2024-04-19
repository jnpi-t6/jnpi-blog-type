export interface PushedProps {
  isPushed: boolean;
  onClick: () => void;
}

export interface SvgProps {
  width: string;
}

export interface BlogProps {
  content: string;
  id: string;
  title: string;
  eyecatch?: EyeCatchProps;
  category?: CategoryProps[];
}

export interface EyeCatchProps {
  url: string;
  width?: number;
  height?: number;
}

export interface CategoryProps {
  id: string;
  name: string;
}

export interface CategoryDataProps {
  contents: CategoryProps[];
}
