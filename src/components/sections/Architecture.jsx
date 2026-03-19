import Container from "../layout/Container";

export default function Architecture() {
  return (
    <section className="py-20 bg-background-secondary">
      <Container>
        <h2 className="text-3xl font-bold text-center">
          System Architecture
        </h2>

        <div className="mt-10 p-6 bg-background-tertiary rounded-xl text-center">
          Android App → Backend API → Database → Web Dashboard
        </div>
      </Container>
    </section>
  );
}