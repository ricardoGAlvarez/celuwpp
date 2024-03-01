import Banner from "@/components/(frontend)/Banner";
import Steps from "@/components/(frontend)/Steps";
import Cards from "@/components/(frontend)/Cards";
export default function Home() {
  return (
    <section className="">
    
      <Banner/>
      <Steps/>
      <Cards apiUrl={"api/product"}/>
    </section>
  );
}
