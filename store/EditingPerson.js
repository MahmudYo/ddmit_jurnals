import { defineStore } from "pinia";
import axios from "axios";
import { useJurnalStore } from "./Jurnal";
const api = "http://127.0.0.1:8000/api";
export const editingPesonseStore = defineStore("editing_persone", {
  state: () => ({
    persone: [],
    formData: {
      categoryId: 0,
      fullName: "",
      description: "",
      role: "",
      image: "",
      selectData: {},
    },
  }),
  actions: {
    index(categoryId) {
      if (!this.persone.length) {
        const jurnal = useJurnalStore();
        jurnal.isLoading = true;
        axios
          .get(`${api}/editing_persons/category/${categoryId}`)
          .then((res) => {
            this.persone = res.data.persone;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            jurnal.isLoading = false;
          });
      } else {
        const category = editingCategoryStore();
        this.persone = category.category.filter((item) => {
          console.log(item.id, categoryId);
          return +categoryId === item.id; // Добавлено возвращение булевого значения
        })[0].persons;
      }
    },
    store() {
      const jurnal = useJurnalStore();
      jurnal.isLoading = true;
      const formData = new FormData();
      for (const key in this.formData) {
        formData.append(key, this.formData[key]);
      }
      axios
        .post(`${api}/editing_persons`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            let progress = (progressEvent.loaded * 100) / progressEvent.total;
            // Переводим байты в килобайты
            const loadedKB = progressEvent.loaded / 1024;
            this.progress.loading = progress.toFixed(2);
            this.progress.size = loadedKB.toFixed(2);
          },
        })
        .then((res) => {
          this.persone.push(res.data.persone);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          jurnal.isLoading = false;
          jurnal.isOpenModal = false;
          jurnal.progress.loading = 0;
          jurnal.progress.size = 0;
          this.formData = {
            fullName: "",
            description: "",
            role: "",
            image: "",
            selectData: {},
          };
        });
    },
    update(persone) {
      const jurnal = useJurnalStore();
      jurnal.isLoading = true;
      const formData = new FormData();
      for (const key in this.formData) {
        formData.append(key, this.formData[key]);
      }
      axios
        .post(`${api}/editing_persons/${persone.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            let progress = (progressEvent.loaded * 100) / progressEvent.total;
            // Переводим байты в килобайты
            const loadedKB = progressEvent.loaded / 1024;
            jurnal.progress.loading = progress.toFixed(2);
            jurnal.progress.size = loadedKB.toFixed(2);
          },
        })
        .then((res) => {
          this.persone = this.persone.map((item) => {
            return item.id === res.data.persone.id ? res.data.persone : item;
          });
        })
        .finally(() => {
          jurnal.isLoading = false;
          jurnal.isOpenModal = false;
          jurnal.progress.loading = 0;
          jurnal.progress.size = 0;
          this.formData = {
            fullName: "",
            description: "",
            role: "",
            image: "",
            selectData: {},
          };
        });
    },
    remove(persone, answer) {
      const jurnal = useJurnalStore();
      if (answer) {
        jurnal.isLoading = true;
        axios
          .delete(`${api}/editing_persons/${persone.id}`)
          .then((res) => {
            this.persone = this.persone.filter(
              (item) => item.id !== persone.id
            );
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            jurnal.isLoading = false;
            jurnal.isOpenModal = false;
          });
      } else {
        jurnal.isOpenModal = false;
      }
    },
  },
});

export const editingCategoryStore = defineStore("editing_category", {
  state: () => ({
    category: [],
    formData: {
      category: "",
      selectData: null,
    },
    rector: null,
  }),
  actions: {
    index() {
      const persone = editingPesonseStore();
      if (!this.category.length) {
        const jurnal = useJurnalStore();
        jurnal.isLoading = true;
        axios
          .get(`${api}/editing_categories`)
          .then((res) => {
            this.category = res.data.category;
            this.rector = res.data.rector;
            this.category.forEach((item) => {
              if (item["persons"]) {
                persone.persone.push(...item["persons"]);
              }
            });
          })
          .finally(() => {
            jurnal.isLoading = false;
          });
      }
    },
    store() {
      const jurnal = useJurnalStore();
      jurnal.isLoading = true;
      axios
        .post(`${api}/editing_categories`, this.formData)
        .then((res) => {
          this.category.push(res.data.category);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.formData = {
            category: "",
            selectData: null,
          };
          jurnal.isLoading = false;
          jurnal.isOpenModal = false;
        });
    },
    update(category) {
      const jurnal = useJurnalStore();
      jurnal.isLoading = true;
      axios
        .put(`${api}/editing_categories/${category.id}`, this.formData)
        .then((res) => {
          console.log(res);
          this.category = this.category.map((item) => {
            return item.id === res.data.category.id ? res.data.category : item;
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.formData = {
            category: "",
            selectData: null,
          };
          jurnal.isLoading = false;
          jurnal.isOpenModal = false;
        });
    },
    remove(category, answer) {
      const jurnal = useJurnalStore();
      if (answer) {
        axios
          .delete(`${api}/editing_categories/${category.id}`)
          .then((res) => {
            this.category = this.category.filter(
              (item) => item.id !== category.id
            );
          })
          .finally(() => {
            jurnal.isLoading = false;
            jurnal.isOpenModal = false;
          });
      } else {
        jurnal.isOpenModal = false;
      }
    },
  },
});
