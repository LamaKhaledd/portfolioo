
export const filterOptions = (options: string[], search: string): string[] => {
    return options.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase().trim())
    );
  };
  