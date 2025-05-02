import { useEffect, useState } from "react";
import Header from "../UI/Header";
import { timeAgo } from "../../utils/timeFunctions";
import { Notification } from "../../utils/types";

const Notifications = () => {
  const [notification] = useState<Notification[]>([
    {
      id: "abc",
      header: "Notification 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus sed delectus repellat impedit asperiores quisquam quibusdam reprehenderit. Eveniet doloribus nulla non id ullam, nihil illo nostrum vero ducimus sit praesentium saepe ut enim? Ad hic doloremque nemo eveniet at quis voluptates deserunt enim soluta iste, odio aspernatur consequatur, odit perferendis! Excepturi reprehenderit expedita praesentium ipsam eum, neque quaerat provident recusandae sapiente doloribus blanditiis incidunt saepe veniam tenetur aut, eveniet vitae explicabo magnam unde nemo? Saepe iusto itaque magnam a animi minima? Voluptatem expedita natus laudantium suscipit ex pariatur voluptate, consectetur iusto sunt sapiente accusantium, sed, amet asperiores quam saepe dolores nam aliquid tempore laborum? Voluptas aliquam iste, eius consequuntur explicabo repellendus pariatur expedita culpa tempore id, rerum, recusandae unde! Temporibus, reprehenderit fugiat aliquam modi itaque officiis sint nemo laboriosam a debitis praesentium repudiandae, maiores eligendi. Adipisci at deserunt dolores iusto voluptate libero consequuntur hic qui, sapiente similique quidem ut, neque sed soluta explicabo cum quisquam, iste rerum sint modi autem reiciendis. Dolore, sapiente? Laborum possimus qui distinctio! Commodi quae suscipit quas vel, eaque officiis? Veniam magni rerum eveniet nostrum possimus maiores esse. Ad, omnis, sequi libero placeat asperiores commodi minus reprehenderit perspiciatis cum accusamus quo incidunt possimus ipsa amet? Corporis adipisci harum magnam labore est eveniet explicabo quam omnis praesentium eaque mollitia accusantium quae quis, voluptates pariatur alias, earum voluptate necessitatibus doloribus quisquam quasi esse consequatur! Incidunt illum ex corporis asperiores consequuntur voluptatem aspernatur atque odio voluptas totam cupiditate dicta reiciendis quibusdam ullam excepturi possimus, eaque quia autem magnam distinctio quo non commodi cum temporibus. Rerum doloremque ratione minus saepe? Iusto id, laudantium, repudiandae sapiente velit nostrum natus praesentium dolorem culpa laborum accusamus, ut numquam! Reprehenderit minus unde quam cum veniam ad suscipit voluptates eos commodi, animi velit magnam corrupti consequuntur vel facere? Cum eaque ratione ipsam perferendis dicta.",
      timestamp: new Date(Date.UTC(2025, 2, 11, 12, 0, 0)).toISOString(),
      isRead: false,
    },
    {
      id: "bcde",
      header: "Notification 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam voluptatem molestias adipisci atque temporibus possimus. Amet illum animi eveniet, cupiditate enim accusantium dolore labore in inventore eaque maiores ipsam, dolor velit facere? Perspiciatis nisi ipsa distinctio quaerat blanditiis nesciunt ex cum aperiam mollitia, molestiae voluptatum illum quasi eveniet labore, praesentium, repudiandae quam velit facere sit ratione provident odio laudantium. Voluptate rerum repellat quae laboriosam dolorum, sapiente debitis quam assumenda maxime. Quae, vel. Dicta aliquid eaque, quae quasi culpa omnis.",
      timestamp: new Date(Date.UTC(2025, 2, 5, 12, 0, 0)).toISOString(),
      isRead: true,
    },
  ]);
  const [currentSelected, setCurrentSelected] = useState<Notification | null>(
    null
  );

  useEffect(() => {
    if (notification.length == 0) return;
    setCurrentSelected(notification[0]);
  }, [notification]);

  return (
    <div className="h-full items-start">
      <Header title="Notifications" rightSide={<div>haha</div>} />
      <div className="flex h-full">
        <ul className="min-w-[300px]">
          {notification.map((message) => (
            <li
              key={message.id}
              className="p-2 border-b-2 border-[var(--color-primary)]"
              onClick={() =>
                setCurrentSelected(
                  notification.find((n) => n.id === message.id) || null
                )
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[var(--color-primary)] text-2xl">
                  {message.header}
                </h3>
                {!message.isRead && <h3 className="text-[var(--color-main-text)]">Unread Message</h3>}
                </div>

              <p className="text-[var(--color-main-text)] mb-3">
                {message.body.split(" ").length > 10
                  ? message.body.split(" ").slice(0, 10).join(" ") + "..."
                  : message.body}
              </p>
              <p className="text-[var(--color-main-text)]">
                {timeAgo(message.timestamp)}
              </p>
            </li>
          ))}
        </ul>
        {currentSelected && (
          <section className="flex flex-col gap-3 p-5 border-l-2 border-[var(--color-primary)]">
            <h2 className="text-[var(--color-primary)] text-3xl">
              {currentSelected.header}
            </h2>
            <p className="text-[var(--color-main-text)]">
              {timeAgo(currentSelected.timestamp)}
            </p>
            <p className="text-[var(--color-main-text)] text-xl">
              {currentSelected.body}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Notifications;
