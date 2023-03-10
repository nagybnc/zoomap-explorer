export const getPlacePredictions = async (
  text: string,
  types: string[] = []
) => {
  return new Promise((resolve, reject) => {
    if (!text) {
      return reject(new Error("Need valid text input"));
    }

    if (typeof window === "undefined") {
      return reject(new Error("Need valid window object"));
    }

    try {
      new window.google.maps.places.AutocompleteService().getPlacePredictions(
        {
          input: text,
          types,
        },
        resolve
      );
    } catch (e) {
      reject(e);
    }
  });
};
