export default async (axios, params, error) => {
  const currentPage = parseInt(params.page);

  const perPage = 10;

  const allArticles = await axios.get("https://api.aclevo.xyz/items/blog?limit=11&offset=0")

  const totalArticles = allArticles.length;

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage);

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalArticles % perPage;

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === lastPage) {
      return totalArticles - lastPageCount;
    }
    return (currentPage - 1) * perPage;
  };

  const paginatedArticles = await axios.get("https://api.aclevo.xyz/items/blog?limit=" + perPage + "&offset=" + skipNumber())

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: "No articles found!" });
  }

  return {
    allArticles,
    paginatedArticles,
  };
};
