import Container from "../layout/Container";

export default function Workflow() {
  return (
    <section className="py-20 text-center">
      <Container>
        <h2 className="text-3xl font-bold">How It Works</h2>

        <p className="mt-6 text-neutral-400">
          Android Device → API → Database → Dashboard → Manager
        </p>
      </Container>
    </section>
  );
}