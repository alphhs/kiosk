export type MenuItem = {
  key: string;
  title: string;
  subtitle: string;
  children: MenuItem[];
  image_url?: string;
  type?: string;
  color?: string;
};
