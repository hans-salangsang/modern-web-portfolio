import ScrollLinked from "../components/ScrollLinked";

export default function ScrollLinkedPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollLinked />
      </div>
    </div>
  );
}

