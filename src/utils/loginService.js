import ResultService from "@/services/ResultService";
import router from "@/router/index";

export default {
  async start(payload, module) {
    const tokkie = payload;
    if (tokkie) {
      try {
        const payload = {
          tokkie: tokkie,
        };
        let response;
        if (module === "moduleA") {
          response = await ResultService.getStartA(payload);
        } else if (module === "moduleB") {
          response = await ResultService.getStartB(payload);
        } else if (module === "moduleC") {
          response = await ResultService.getStartC(payload);
        } else if (module === "moduleD") {
          response = await ResultService.getStartD(payload);
        } else if (module === "moduleE") {
          response = await ResultService.getStartE(payload);
        } else if (module === "moduleH") {
          response = await ResultService.getStartH(payload);
        } else if (module === "moduleI") {
          response = await ResultService.getStartI(payload);
        } else if (module === "moduleJ") {
          response = await ResultService.getStartJ(payload);
        } else if (module === "moduleK") {
          response = await ResultService.getStartK(payload);
        } else if (module === "moduleL") {
          response = await ResultService.getStartL(payload);
        } else if (module === "moduleM") {
          response = await ResultService.getStartM(payload);
        } else {
          response = await ResultService.getStartA(payload);
        }
        let app = this;
        app.clientId = response.data.data.clientId;
        app.firstNameClient = response.data.data.firstNameClient;
        app.lastNameClient = response.data.data.lastNameClient;
        app.emailClient = response.data.data.emailClient;
        app.firstNameUser = response.data.data.firstNameUser;
        app.lastNameUser = response.data.data.lastNameUser;
        app.style = response.data.data.style;
        app.website_team = response.data.data.website_team;
        localStorage.setItem("clientId", JSON.stringify(this.clientId));
        localStorage.setItem(
          "firstNameClient",
          JSON.stringify(this.firstNameClient)
        );
        localStorage.setItem(
          "lastNameClient",
          JSON.stringify(this.lastNameClient)
        );
        localStorage.setItem("emailClient", JSON.stringify(this.emailClient));
        localStorage.setItem(
          "firstNameUser",
          JSON.stringify(this.firstNameUser)
        );
        localStorage.setItem("lastNameUser", JSON.stringify(this.lastNameUser));
        localStorage.setItem("website_team", JSON.stringify(this.website_team));

        if (this.style === "formeel") {
          localStorage.setItem("formal", JSON.stringify(true));
        }
        if (this.style === "informeel") {
          localStorage.setItem("formal", JSON.stringify(false));
        }
        if (module === "moduleA") {
          await router.push({ name: "intro_a" });
        } else if (module === "moduleB") {
          await router.push({ name: "intro_b" });
        } else if (module === "moduleC") {
          await router.push({ name: "intro_c" });
        } else if (module === "moduleD") {
          await router.push({ name: "intro_d" });
        } else if (module === "moduleE") {
          await router.push({ name: "intro_e" });
        } else if (module === "moduleH") {
          await router.push({ name: "intro_h" });
        } else if (module === "moduleI") {
          await router.push({ name: "intro_i" });
        } else if (module === "moduleJ") {
          await router.push({ name: "intro_j" });
        } else if (module === "moduleK") {
          await router.push({ name: "intro_k" });
        } else if (module === "moduleL") {
          await router.push({ name: "intro_l" });
        } else if (module === "moduleM") {
          await router.push({ name: "intro_m" });
        }
      } catch (error) {
        // eslint-disable-next-line no-undef
        await EventBus.$emit("errStart", true);
      }
    } else {
      // eslint-disable-next-line no-undef
      await EventBus.$emit("errStart", true);
    }
  },
};
