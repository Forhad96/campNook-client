import Container from "../shared/Container";
import NewCollectionCard from "./NewCollectionCard";

const NewCollection = () => {
  return (
    <section className="">
      <Container>
        <div>
          <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
            Our Best Selling Collection
          </h1>
          <NewCollectionCard />
        </div>
      </Container>
    </section>
  );
};
export default NewCollection;
