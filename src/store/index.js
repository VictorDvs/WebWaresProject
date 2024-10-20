import { createStore } from 'vuex';

export default createStore({
  state: {
    categories: [
      { id: 1, name: "Mobilier d'intérieur" },
      { id: 2, name: 'Luminaires' },
      { id: 3, name: 'Tapis' },
      { id: 4, name: 'Objets de décorations' },
    ],
    productsList: [
      {
        id: 1,
        image: 'mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        categorieId: 1,
        nombreDeVente: 0,
      },
      {
        id: 2,
        image: 'mobilier-4.jpg',
        titre: 'Canapé Krug',
        description: 'Un canapé tout en finesse et élégance.',
        prix: 499.99,
        moq: 5,
        categorieId: 1,
        nombreDeVente: 0,
      },
      {
        id: 3,
        image: 'mobilier-3.jpg',
        titre: 'Canapé Munzen',
        description: 'Un canapé en cuir marron et confortable.',
        prix: 499.99,
        moq: 5,
        categorieId: 1,
        nombreDeVente: 0,
      },
      {
        id: 4,
        image: 'mobilier-2.jpg',
        titre: 'Étagère en bois',
        description: 'Une étagère pratique et minimaliste.',
        prix: 99.99,
        moq: 15,
        categorieId: 1,
        nombreDeVente: 0,
      },
      {
        id: 5,
        image: 'mobilier-1.jpg',
        titre: 'Table de chevet',
        description: 'Table de chevet en bois. Pratique et discrète.',
        prix: 199.99,
        moq: 15,
        categorieId: 1,
        nombreDeVente: 0,
      },
      {
        id: 6,
        image: 'luminaire-1.jpg',
        titre: 'Lampe moderne',
        description: 'Lampe avec un design moderne et éclairage ajustable.',
        prix: 129.99,
        moq: 10,
        categorieId: 2,
        nombreDeVente: 0,
      },
      {
        id: 7,
        image: 'luminaire-2.jpg',
        titre: 'Lampe de cuisine',
        description: "Lampe sobre à l'éclairage ajustable.",
        prix: 119.99,
        moq: 10,
        categorieId: 2,
        nombreDeVente: 0,
      },
      {
        id: 8,
        image: 'luminaire-3.jpg',
        titre: "Lampe d'extérieur",
        description: 'Lampe en bois avec un design moderne.',
        prix: 149.99,
        moq: 10,
        categorieId: 2,
        nombreDeVente: 0,
      },
      {
        id: 9,
        image: 'luminaire-4.jpg',
        titre: 'Lampe industrielle',
        description: 'Lampe au design moderne et industriel.',
        prix: 129.99,
        moq: 10,
        categorieId: 2,
        nombreDeVente: 0,
      },
      {
        id: 10,
        image: 'luminaire-5.jpg',
        titre: 'Lampe en bois',
        description: 'Lampe au design enfantin et simple.',
        prix: 129.99,
        moq: 10,
        categorieId: 2,
        nombreDeVente: 0,
      },
      {
        id: 11,
        image: 'tapis-1.jpg',
        titre: 'Tapis en poil de yaourt',
        description: 'Tapis doux en poil de yaourt sauvage.',
        prix: 189.99,
        moq: 10,
        categorieId: 3,
        nombreDeVente: 0,
      },
      {
        id: 12,
        image: 'tapis-2.jpg',
        titre: 'Tapis en laine',
        description: 'Tapis doux en laine avec motif géométrique.',
        prix: 99.99,
        moq: 20,
        categorieId: 3,
        nombreDeVente: 0,
      },
      {
        id: 13,
        image: 'tapis-3.jpg',
        titre: 'Tapis en laine',
        description:
          'Tapis doux en laine avec motif géométrique mais plus grand.',
        prix: 89.99,
        moq: 20,
        categorieId: 3,
        nombreDeVente: 0,
      },
      {
        id: 14,
        image: 'tapis-4.jpg',
        titre: 'Tapis en crochet',
        description: "Tapis doux réalisé au crochet avec motif d'éléphant.",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
        nombreDeVente: 0,
      },
      {
        id: 15,
        image: 'tapis-5.jpg',
        titre: 'Tapis en moumoute',
        description: 'Tapis en moumoute toute douce et naturelle.',
        prix: 89.99,
        moq: 20,
        categorieId: 3,
        nombreDeVente: 0,
      },
      {
        id: 16,
        image: 'deco-1.jpg',
        titre: "Vase en bois d'arbre",
        description: "Vase réalisé à base d'arbre venus d'une forêt.",
        prix: 49.99,
        moq: 20,
        categorieId: 4,
        nombreDeVente: 0,
      },
      {
        id: 17,
        image: 'deco-2.jpg',
        titre: 'Vase imprimé en 3D',
        description: 'Vase imprimé en 3D en plastique recyclable.',
        prix: 49.99,
        moq: 40,
        categorieId: 4,
        nombreDeVente: 0,
      },
      {
        id: 18,
        image: 'deco-3.jpg',
        titre: 'Vase éthnique en argile',
        description: 'Vase éthnique en argile avec motifs gravés à la main.',
        prix: 49.99,
        moq: 20,
        categorieId: 4,
        nombreDeVente: 0,
      },
      {
        id: 19,
        image: 'deco-4.jpg',
        titre: 'Vase arrondis',
        description: 'Vase à la forme tout à la fois élégante et rigolote.',
        prix: 69.99,
        moq: 10,
        categorieId: 4,
        nombreDeVente: 0,
      },
      {
        id: 20,
        image: 'deco-5.jpg',
        titre: 'Vase rectangulaire',
        description:
          'Vase au design futuriste et aux méthodes de réalisation résolument classiques.',
        prix: 49.99,
        moq: 20,
        categorieId: 4,
        nombreDeVente: 0,
      },
    ],
    userDatabase: [
      {
        id: 1,
        raisonSociale: 'Entreprise A',
        siret: '12345678901234',
        adresse: '123 Rue de la République',
        codePostal: '75001',
        ville: 'Paris',
        email: 'entrepriseA@example.com',
        motDePasse: 'motdepasseA',
        role: 'USER',
      },
      {
        id: 2,
        raisonSociale: 'WebWares',
        siret: '56789012345678',
        adresse: '456 Avenue des Champs-Élysées',
        codePostal: '75008',
        ville: 'Paris',
        email: 'web.wares@gmail.com',
        motDePasse: 'motdepasseB12_',
        role: 'ADMIN',
      },
    ],
    filteredCategory: null,
    filteredProductsListByCategory: [],
    filteredProductsList: [],
    searchQuery: '',
    cart: [],
    cartvalue: '',
    adminSearchResult: [],
    adminSearchQuery: '',
  },
  mutations: {
    getProductDetails(state, productDetails) {
      state.productDetails = productDetails;
    },
    getFilteredProductsList(state, filteredProductsList) {
      state.filteredProductsList = filteredProductsList;
    },

    getFilteredProductsListByCategory(state, filteredProductsListByCategory) {
      state.filteredProductsListByCategory = filteredProductsListByCategory;
    },
    getCart(state, cart) {
      state.cart = cart;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    changeCategory(state, category) {
      state.filteredCategory = category;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    resetSearch(state) {
      state.searchQuery = '';
      // state.filteredCategory = null;
    },
    resetCategory(state) {
      state.filteredCategory = null;
    },
    setUserDatabase(state, userDatabase) {
      state.userDatabase = userDatabase;
    },
    setLocalStorageToCart(state, user) {
      state.cart = localStorage.getItem(`panier_${user.id}`);
    },
    updateCategories(state, categories) {
      state.categories = categories;
    },
    setAdminSearchResult(state, result) {
      state.adminSearchResult = result;
    },
    setAdminSearchQuery(state, query) {
      state.adminSearchQuery = query;
    },
    setProductsList(state, productsList) {
      state.productsList = productsList;
    },
    removeProduct(state, productId) {
      state.productsList = state.productsList.filter(
        (product) => product.id !== productId
      );
    },
  },
  actions: {
    filterProductsByCategory(context, category) {
      // if (category === context.state.filteredCategory) {
      // context.commit('changeCategory', null);
      // } else if (context.state.filteredCategory === null) {
      context.commit('changeCategory', category);
      // }
      let filteredProductsListByCategory;
      if (localStorage.getItem('productsList')) {
        filteredProductsListByCategory = JSON.parse(
          localStorage.getItem('productsList')
        ).filter((product) => product.categorieId === category);
      } else {
        filteredProductsListByCategory = context.state.productsList.filter(
          (product) => product.categorieId === category
        );
      }
      if (filteredProductsListByCategory.length === 0) {
        if (localStorage.getItem('productsList')) {
          context.commit(
            'getFilteredProductsListByCategory',
            JSON.parse(localStorage.getItem('productsList'))
          );
        } else {
          context.commit(
            'getFilteredProductsListByCategory',
            context.state.productsList
          );
        }
      } else {
        context.commit(
          'getFilteredProductsListByCategory',
          filteredProductsListByCategory
        );
      }
    },
    resetCategory(context) {
      context.commit('changeCategory', null);
    },
    logOut() {
      localStorage.removeItem('user');
    },
    // addToCart({ commit }, state, product) {
    //   let user = JSON.parse(localStorage.getItem('user'));
    //   let userName = user.id;
    //   commit('addToCart', product);
    //   console.log(state.cart);

    //   localStorage.setItem(`panier_${userName}`, JSON.stringify(state.cart));
    // },
    // updateUserDatabase({ commit }) {
    //   const userList = JSON.parse(localStorage.getItem("user_list")) || [];
    //   commit('setUserDatabase', userList);
    // }
    loadUserDatabase({ commit }) {
      if (localStorage.getItem('user_list')) {
        let storeDatabase = JSON.parse(localStorage.getItem('user_list'));
        commit('setUserDatabase', storeDatabase);
      } else {
        return;
      }
    },
    loadProductsList({ commit }) {
      if (localStorage.getItem('productsList')) {
        let localStorageProductsList = JSON.parse(
          localStorage.getItem('productsList')
        );
        commit('setProductsList', localStorageProductsList);
      } else {
        return;
      }
    },
    deleteProduct({ commit }, productId) {
      if (localStorage.getItem('productsList')) {
        commit('removeProduct', productId);
        const updatedProductsList = JSON.parse(
          localStorage.getItem('productsList')
        );

        // Filtrer pour exclure le produit supprimé
        const newProductsList = updatedProductsList.filter(
          (product) => product.id !== productId
        );

        // Mettre à jour le local storage avec la nouvelle liste
        localStorage.setItem('productsList', JSON.stringify(newProductsList));
      }
    },
  },
  getters: {
    lastImagesByCategory(state) {
      const lastImages = [];
      let databaseProduits;
      let databaseCategories;
      if (localStorage.getItem('productsList')) {
        databaseProduits = JSON.parse(localStorage.getItem('productsList'));
      } else {
        databaseProduits = state.productsList;
      }
      if (localStorage.getItem('categories')) {
        databaseCategories = JSON.parse(localStorage.getItem('categories'));
      } else {
        databaseCategories = state.categories;
      }
      // Boucle sur chaque catégorie
      databaseCategories.forEach((category) => {
        // Filtrer les produits par catégorie
        const productsInCategory = databaseProduits.filter(
          (product) => product.categorieId === category.id
        );
        console.log(productsInCategory);

        // Prendre le dernier produit ajouté dans chaque catégorie
        if (productsInCategory.length > 0) {
          lastImages.push(productsInCategory[productsInCategory.length - 1]);
        }
        console.log(lastImages);
      });
      return lastImages;
    },
    filterProductByQuery(state) {
      state.filteredProductsList = state.filteredProductsListByCategory;

      if (!state.searchQuery) {
        return state.filteredProductsListByCategory;
      }
      state.filteredProductsList = state.filteredProductsListByCategory.filter(
        (product) => {
          return (
            product.titre
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
          );
        }
      );
    },
    searchLocalDatabase(state, query) {
      state.adminSearchResult = state.adminSearchResult.filter((search) => {
        return search.name.toLowerCase().includes(query.toLowerCase());
      });
      this.$store.commit('setAdminSearchResult', [...this.localDatabaseResult]);
    },
  },
  modules: {},
});
