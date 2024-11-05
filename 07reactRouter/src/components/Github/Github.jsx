import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="p-4 text-3xl m-4 bg-gray-600 text-center text-white ">
      Github Followers : {data.followers}
      <img
        src={data.avatar_url}
        alt="Github picture "
        height={200}
        width={200}
      />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
