<template>
    <v-app>
      <v-app-bar app color="primary" elevation="'" >
        <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-icon>mdi-account-box </v-icon>
      </v-app-bar>
      <v-navigation-drawer app v-model="sidebar">
        <v-list dense color="primary" dark>
          <v-list-item>           
            <v-list-item-action>
              <v-icon @click.stop="sidebar = !sidebar">mdi-chevron-left</v-icon>
            </v-list-item-action>
            <v-list-item-tittle>
            <h3> Minhas tarefas   </h3>
          </v-list-item-tittle>
          </v-list-item>
        </v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon> mdi-account-box</v-icon>
          </v-list-item-avatar>
          <v-list-item-content> Jaummdazs</v-list-item-content>
          <v-btn icon small> <v-icon> mdi-chevron-left</v-icon></v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="item of items" :key="item.tittle" link :to="item.to">
            <v-list-item-icon>
              <v-icon> {{item.icon}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{item.tittle}}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main> 
        <router-view></router-view>
      </v-main>
      <v-footer app class="py-3"> <span class="overline"> ForgetExploded &copy;2021 </span></v-footer>
      
    </v-app>
</template>

<script>
export default {
  data(){
    return{
      sidebar:true,
      items:[
        {tittle:"Home", icon:"mdi-account-box", to:"/"},
        {tittle:"Perfil", icon:"mdi-account-cog", to:"/perfil"},
        {tittle:"Sair", icon:"mdi-exit-to-app", to:"/login"},
      ]
    };
  },
};
</script>

<style>

</style>