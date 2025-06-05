import Card from "../components/Card"

export default function Home() {

  return (
    <div className="p-4">
      <section className="flex flex-wrap gap-5">
        <Card
          link="https://youtu.be/wezx0JJjtu4?si=o71Ez1U0Xvrn6MfJ"
          type="video"
          title="Unpacking the reality of working in startup"
        />
        <Card
          link="https://x.com/CoconutShawarma/status/1929957115864695000"
          title="Child support RCB"
          type="tweet"
        />
        <Card
          link="https://x.com/CoconutShawarma/status/1929957115864695000"
          title="Child support RCB"
          type="tweet"
        />
      </section>
    </div>
  )
}
