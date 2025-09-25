export const userProfile =
  "https://i.pinimg.com/736x/67/e3/19/67e319798b51eab15c32f518f3a41506.jpg";
  

export const bannerBg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg";

export const ApiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + import.meta.env.VITE_TMDB_API,
  },
};

export const ImgCdnUrl = "https://image.tmdb.org/t/p/w500";

export const supportedLang = [
  { identifier: "en", name: "English" },
  { identifier: "nepali", name: "Nepali" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];





