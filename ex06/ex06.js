Parse.initialize(
  "xqBAY3CcRZ5CKgpsDP6iEZ3rOqkJ2NPmhCWfH9Mr",
  "OAFM7YzRygrkVTwTNmZwMPTlwmVKUYP51epG4EDr"
);
Parse.serverURL = "https://parseapi.back4app.com/";

document.getElementById("btnCreate").addEventListener("click", async () => {
  const task = new Parse.Object("Task");

  task.set("description", document.getElementById("description").value);

  try {
    await task.save();
    alert(`Tarefa criada com sucesso!`);

    showList();
  } catch (error) {
    alert(`Houve uma falha ao tentar realizar a ação: ${error.message}`);
  }
});

const list = document.getElementById("list");

const showList = async () => {
  list.innerHTML = "";

  const query = new Parse.Query("Task");

  try {
    const results = await query.find();

    for (const object of results) {
      const id = object.id;
      const description = object.get("description");
      const accomplished = object.get("accomplished");

      const li = document.createElement("li");
      li.innerHTML = description;

      const cboxAccomplished = document.createElement("input");
      cboxAccomplished.type = "checkbox";
      if (accomplished) {
        cboxAccomplished.checked = true;
        li.style.textDecoration = "line-through";
      }

      const btnUpdate = document.createElement("button");
      btnUpdate.innerHTML = "Editar descrição";

      const btnRemove = document.createElement("button");
      btnRemove.innerHTML = "Remover";

      const br1 = document.createElement("br");
      const br2 = document.createElement("br");

      list.appendChild(li);
      list.appendChild(cboxAccomplished);
      list.appendChild(btnUpdate);
      list.appendChild(btnRemove);
      list.appendChild(br1);
      list.appendChild(br2);

      cboxAccomplished.addEventListener("click", async () => {
        const task = new Parse.Object("Task");

        task.set("objectId", id);
        if (accomplished) {
          task.set("accomplished", false);

          try {
            const result = await task.save();
            alert(
              `A tarefa "${result.get(
                "description"
              )}" foi desmarcada como concluída!`
            );

            showList();
          } catch (error) {
            alert(
              `Houve uma falha ao tentar realizar a ação: ${error.message}`
            );
          }
        } else {
          task.set("accomplished", true);

          try {
            const result = await task.save();
            alert(
              `A tarefa "${result.get(
                "description"
              )}" foi marcada como concluída!`
            );

            showList();
          } catch (error) {
            alert(
              `Houve uma falha ao tentar realizar a ação: ${error.message}`
            );
          }
        }
      });

      btnUpdate.addEventListener("click", async () => {
        const task = new Parse.Object("Task");

        task.set("objectId", id);
        task.set("description", window.prompt(`Informe a nova descrição`));

        try {
          const result = await task.save();
          alert(
            `A tarefa ${result.get("description")} foi atualizada com sucesso!`
          );

          showList();
        } catch (error) {
          alert(`Houve uma falha ao tentar realizar a ação: ${error.message}`);
        }
      });

      btnRemove.addEventListener("click", async () => {
        const task = new Parse.Object("Task");

        task.set("objectId", id);

        try {
          const result = await task.destroy();
          alert(
            `A tarefa "${result.get("description")}" foi excluída com sucesso!`
          );

          showList();
        } catch (error) {
          alert(`Houve uma falha ao tentar realizar a ação: ${error.message}`);
        }
      });
    }
  } catch (error) {
    alert(`Houve uma falha ao tentar realizar a ação: ${error.message}`);
  }
};

document
  .getElementById("showAccomplisheds")
  .addEventListener("click", async () => {
    if (showAccomplisheds.checked) {
      list.innerHTML = "";

      const query = new Parse.Query("Task");
      query.equalTo("accomplished", true);

      try {
        const results = await query.find();

        for (const object of results) {
          const id = object.id;
          const description = object.get("description");
          const accomplished = object.get("accomplished");

          const li = document.createElement("li");
          li.innerHTML = description;

          const cboxAccomplished = document.createElement("input");
          cboxAccomplished.type = "checkbox";
          if (accomplished) {
            cboxAccomplished.checked = true;
            li.style.textDecoration = "line-through";
          }

          const btnUpdate = document.createElement("button");
          btnUpdate.innerHTML = "Editar descrição";

          const btnRemove = document.createElement("button");
          btnRemove.innerHTML = "Remover";

          const br1 = document.createElement("br");
          const br2 = document.createElement("br");

          list.appendChild(li);
          list.appendChild(cboxAccomplished);
          list.appendChild(btnUpdate);
          list.appendChild(btnRemove);
          list.appendChild(br1);
          list.appendChild(br2);

          cboxAccomplished.addEventListener("click", async () => {
            const task = new Parse.Object("Task");

            task.set("objectId", id);
            if (accomplished) {
              task.set("accomplished", false);

              try {
                const result = await task.save();
                alert(
                  `A tarefa "${result.get(
                    "description"
                  )}" foi desmarcada como concluída!`
                );

                showList();
              } catch (error) {
                alert(
                  `Houve uma falha ao tentar realizar a ação: ${error.message}`
                );
              }
            } else {
              task.set("accomplished", true);

              try {
                const result = await task.save();
                alert(
                  `A tarefa "${result.get(
                    "description"
                  )}" foi marcada como concluída!`
                );

                showList();
              } catch (error) {
                alert(
                  `Houve uma falha ao tentar realizar a ação: ${error.message}`
                );
              }
            }
          });

          btnUpdate.addEventListener("click", async () => {
            const task = new Parse.Object("Task");

            task.set("objectId", id);
            task.set("description", window.prompt(`Informe a nova descrição`));

            try {
              const result = await task.save();
              alert(
                `A tarefa ${result.get(
                  "description"
                )} foi atualizada com sucesso!`
              );

              showList();
            } catch (error) {
              alert(
                `Houve uma falha ao tentar realizar a ação: ${error.message}`
              );
            }
          });

          btnRemove.addEventListener("click", async () => {
            const task = new Parse.Object("Task");

            task.set("objectId", id);

            try {
              const result = await task.destroy();
              alert(
                `A tarefa "${result.get(
                  "description"
                )}" foi excluída com sucesso!`
              );

              showList();
            } catch (error) {
              alert(
                `Houve uma falha ao tentar realizar a ação: ${error.message}`
              );
            }
          });
        }
      } catch (error) {
        alert(`Houve uma falha ao tentar realizar a ação: ${error.message}`);
      }
    } else {
      showList();
    }
  });

showList();
