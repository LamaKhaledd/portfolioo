interface IPortfolioComboboxOption {
  value: string;
  selected?: boolean;
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
