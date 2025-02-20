// src/components/History.js
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function History() {
  return (
    <LampContainer>
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-b from-white to-amber-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          History & Legacy
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-6 text-center text-white text-lg max-w-3xl">
          <p>Here's some content about the history of lamp building. Lamps have been an essential part of human civilization since ancient times, providing light and comfort in the darkness.</p>
          <p>From oil lamps to modern LED technology, the evolution of lamps reflects our continuous quest for better illumination solutions.</p>
          <p className=" mt-3.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus delectus molestiae fugit reiciendis omnis culpa, accusamus, sapiente aspernatur obcaecati animi dolores laudantium maxime recusandae mollitia! Necessitatibus, dolore! Doloremque eos corporis aut placeat architecto ex sed, natus soluta pariatur facilis voluptates quidem, vero esse! Sapiente totam magni nemo repellendus exercitationem consequatur voluptatibus reprehenderit eaque nam non? Excepturi laborum veniam voluptates modi hic delectus eos ipsa consequatur saepe cupiditate eius nulla voluptas veritatis rem illo exercitationem quae, inventore sunt ab perspiciatis accusantium laboriosam mollitia harum sit? Laboriosam quae voluptates molestias dolor? Atque dolorum labore ut maxime consectetur neque sit at possimus quaerat. Possimus quia esse architecto, neque officiis inventore mollitia amet fuga ullam magni. Saepe, molestiae mollitia est cupiditate commodi eum nemo qui! Quo incidunt neque id omnis sunt atque necessitatibus magni dolorem doloribus, animi, quaerat cupiditate? Eaque tempora quis qui magnam maiores explicabo sunt quidem, facere blanditiis, recusandae autem eum totam ab modi. Repellendus laboriosam, labore ex earum excepturi inventore et architecto accusamus mollitia! Quia odit ratione laudantium eum omnis labore facere magnam vel, nobis sequi neque molestias numquam aliquid dicta nam officia iusto ducimus obcaecati et quas blanditiis assumenda explicabo. Impedit dolore ut eum quo libero a, nisi natus porro cum officia excepturi pariatur unde corporis nihil ratione delectus in tenetur molestias aut assumenda autem officiis! Aspernatur quia aut quos a reiciendis, veniam blanditiis sint explicabo nisi laboriosam facilis unde, nihil provident earum nam aliquid quam vel, et numquam laborum mollitia? Nihil veritatis, pariatur quidem nulla voluptate doloremque id libero ea voluptatum, voluptatibus, placeat ullam quae. Esse, accusantium officiis sequi cumque quisquam atque unde accusamus enim adipisci dolorem veniam distinctio temporibus ducimus voluptatibus eveniet autem quaerat minus, tempore deserunt consectetur molestiae quae. Rem repellat ipsum culpa cumque debitis repellendus quia deleniti in. Adipisci dolore dolor quos tenetur accusantium repudiandae impedit praesentium aliquam, explicabo sed illo quidem corrupti commodi laudantium ipsum, est obcaecati? At libero, velit dolorem doloremque eos dolore vero exercitationem soluta quas quaerat explicabo repudiandae adipisci corporis nemo vel vitae illo sapiente et quidem. Expedita praesentium rerum blanditiis aut excepturi. Natus, ab illo! Animi aperiam veritatis libero doloremque repellat nulla. Dicta iusto reprehenderit quae earum voluptas minima officiis at, facere perspiciatis vero laudantium corporis aliquid quos cumque in accusamus dolore placeat eum ut autem facilis! Asperiores sequi commodi enim similique, accusamus, suscipit minima non fuga unde iure natus iusto veritatis a alias quos explicabo nam quibusdam veniam tempora!</p>
        </motion.div>
      </div>
    </LampContainer>
  );
}