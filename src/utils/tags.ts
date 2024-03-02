export const sendArrayReturnObject = (tags: string[]) => {
  const tagsObject: any = {};
  tags.forEach((tag: string, index: number) => {
    tagsObject[`tag${index + 1}`] = tag;
  });
  return tagsObject;
};
