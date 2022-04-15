/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import PublicLayout from "/pagesComponents/pages/users/new-user/components/PublicLayout";
import Footer from "/pagesComponents/authentication/components/Footer";
import ProfileInfoCard from "/examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "/examples/Lists/ProfilesList";

// Overview page components
import Header from "/pagesComponents/pages/institucional/Header";

// Data
import profilesListData from "/pagesComponents/pages/profile/profile-overview/data/profilesListData";

// Images

function Overview() {
  return (
    <PublicLayout dark>
      <MDBox mb={2} />
      <Header>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            <MDTypography
              variant="h5"
            >
              Espiritualidade
            </MDTypography>
            <MDTypography
              fontWeight="light"
              font-size="0.875rem"
            >
              <p class="text-justify">
                Levando-se em consideração o fundamental, integrando o visível e o invisível do EJC, torna-se necessário defini-la: trata-se da Espiritualidade do EJC.
              </p>
              <p class="text-justify">
                O EJC é feito pelos jovens e para eles. Trata-se de dar-lhes motivação, perspectiva e meios para superar seus problemas individuais, familiares, sociais, ideológicos e religiosos.
              </p>
              <p class="text-justify">
                O Padre está aí somente para questionar, nunca para mudar ou dirigir.
                Tudo é feito pelos jovens e para os jovens.
              </p>
              <p class="text-justify">
                A fé surgirá como consequência inelutável do trabalho cristão subjacente, realizado pelos pelos jovens. É Deus quem converte e muda as pessoas. Somos apenas instrumentos de Deus e disso devemos ter plena consciência.
              </p>
              <p class="text-justify">
                A espiritualidade do EJC foi definida pelo seu fundador, quando afirmou: "Doação, Pobreza, Simplicidade, Alegria e Oração são a tônica do Encontrão".
              </p>
              <p class="text-justify">
                <strong>DOAÇÃO</strong>: Em primeiro lugar, pois se trata daquilo que é necessário e essencial na vida cristã. O ensinamento e o exemplo de Cristo nos ensinam a vida de doação humilde e generosa a serviço dos outros. O importante é dar-se totalmente naquilo que se dá.
              </p>
              <p class="text-justify">
                <strong>POBREZA</strong>: É a atitude evangélica fundamental para se acolher o Reino dos Céus, cuja construção, aqui mesmo e hoje, se faz através do espírito de pobreza, de disponibilidade e confiança em Deus. Pobre é aquele que tudo espera de Deus, não querendo isso dizer que a Providência Divina dispensa a providência e o trabalho dos homens. Estes, todavia, devem ser realizados sem inquietação exagerada, sem preocupações perturbadoras. Pobre, pois é aquele que confia mais na ação de Deus do que no perfeccionismo dos seus planos e de suas técnicas humanas. A esta atitude de pobreza efetiva e interior, é preciso juntar a pobreza exterior que vai se traduzir num estilo de vida simples, o mais possível conforme a exigência evangélica, eliminando o que seja supérfluo, sofisticado e espírito do mundo.
              </p>
              <p class="text-justify">
                <strong>SIMPLICIDADE</strong>: É a atitude evangélica sem a qual, segundo Cristo, não se pode entrar no Reino dos Céus, no Reino de Deus. Atitude semelhante a da criança: confiante, espontânea, verdadeira... É o reconhecimento, portanto, de nossa própria verdade, é a consequência de nosso valor e, também, de nossas limitações. Sem impostura, sem duplicidade. Atitude que vai traduzir-se num estilo de vida simples, espontâneo e autêntico no relacionamento com os outros, no modo de se comportar, de se apresentar, evitando o ridículo, o grotesco e o vulgar.
              </p>
              <p class="text-justify">
                <strong>ALEGRIA</strong>: A qual não é festividade inconsequente nem extravasamento de um vazio interior. A alegria provém de outra fonte, é espiritual. É a comunicação da paz interior, nascida da certeza da vitória do bem, experimentada no EJC na partilha, doação e na comunhão com o outro e com Deus.
              </p>
              <p class="text-justify">
                <strong>ORAÇÃO</strong>: No Encontro, é importante para pensar, para se encontrar, mas também para se comunicar com Deus, para rever sua caminhada à luz da palavra de Deus. Orar é comunicar-se com Deus, é identificar-se com a sua vontade, mantendo uma disponibilidade renovada a seus desígnios. A vigília, por isso, é um momento fundamental no Encontro. Não é dispensável ou substituível, Pertence ao próprio EJC. A oração das equipes de trabalho, feita com fé, poderá, como costuma se dizer, remover montanhas e dispor para acolhimento generoso do dom e do apelo de Deus.
              </p>
            </MDTypography>
          </Grid>
          <Grid item xs={4}>
            <ProfilesList
              title="dirigentes"
              profiles={profilesListData}
              shadow={false}
            />
          </Grid>
        </Grid>
      </Header>
      <Footer dark />
    </PublicLayout>
  );
}

export default Overview;
