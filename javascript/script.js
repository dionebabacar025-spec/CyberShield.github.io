/* =========================================
   POPUP CYBERSHIELD
========================================= */

const popup = document.getElementById("popup");
const popupTitre = document.getElementById("popupTitre");
const popupTexte = document.getElementById("popupTexte");
const fermerPopup = document.getElementById("fermerPopup");

const boutons = document.querySelectorAll(".btn-popup");


/* =========================================
   CONTENU DES CYBERATTAQUES
========================================= */

const attaques = {

    phishing: {

        titre: "Phishing",

        contenu: `

            <section class="popup-section">

                <h3>Qu'est-ce que c'est ?</h3>

                <p>
                    Le <strong class="strong">phishing</strong>, ou hameçonnage, est une
                    technique de cyberattaque qui consiste à tromper une
                    personne afin de lui faire communiquer des informations
                    confidentielles.
                </p>

                <p>
                    L'attaquant se fait généralement passer pour une personne,
                    une entreprise ou un service de confiance. Il peut par
                    exemple imiter une banque, un réseau social, une entreprise
                    ou même un responsable de l'organisation dans laquelle
                    travaille la victime.
                </p>

            </section>


            <section class="popup-section">

                <h3>Comment ça fonctionne ?</h3>

                <p>
                    Le cybercriminel envoie généralement un
                    <strong class="strong">e-mail, un SMS ou un message contenant un lien
                    frauduleux</strong>.
                </p>

                <p>
                    Le message peut prétendre qu'une action urgente est
                    nécessaire : confirmer un compte, effectuer un paiement,
                    modifier un mot de passe ou résoudre un prétendu problème
                    de sécurité.
                </p>

                <p>
                    Lorsque la victime clique sur le lien, elle peut être
                    redirigée vers un faux site conçu pour récupérer ses
                    identifiants, ses informations bancaires ou d'autres
                    données personnelles.
                </p>

            </section>


            <section class="popup-section">

                <h3>Exemple concret</h3>

                <p>
                    Un utilisateur reçoit un message prétendant provenir de
                    sa banque. Le message indique que son compte sera bloqué
                    s'il ne confirme pas immédiatement ses informations.
                </p>

                <p>
                    Le lien présent dans le message dirige l'utilisateur vers
                    une fausse page bancaire. Lorsqu'il saisit son identifiant
                    et son mot de passe, ces informations sont directement
                    récupérées par l'attaquant.
                </p>

            </section>


            <section class="popup-section">

                <h3>Conséquences</h3>

                <ul>
                    <li>Vol de mots de passe et d'identifiants.</li>
                    <li>Vol d'informations personnelles.</li>
                    <li>Fraude bancaire ou financière.</li>
                    <li>Prise de contrôle d'un compte.</li>
                    <li>Propagation de l'attaque vers d'autres utilisateurs.</li>
                </ul>

            </section>


            <section class="popup-section protection">

                <h3>Comment se protéger ?</h3>

                <p>
                    Vérifiez toujours l'adresse de l'expéditeur avant de
                    cliquer sur un lien. Méfiez-vous particulièrement des
                    messages qui créent un sentiment d'urgence.
                </p>

                <p>
                    Évitez également de saisir vos informations personnelles
                    après avoir suivi un lien reçu par e-mail ou par SMS.
                    Accédez plutôt directement au site officiel du service
                    concerné.
                </p>

            </section>

        `
    },


    ransomware: {

        titre: "Ransomware",

        contenu: `

            <section class="popup-section">

                <h3>Qu'est-ce que c'est ?</h3>

                <p>
                    Un <strong class="strong">ransomware</strong>, ou rançongiciel, est un
                    logiciel malveillant conçu pour empêcher une victime
                    d'accéder à ses fichiers ou à son système informatique.
                </p>

                <p>
                    Dans de nombreux cas, les fichiers sont chiffrés et
                    deviennent inutilisables. Les cybercriminels demandent
                    ensuite une rançon en échange d'une prétendue clé
                    permettant de récupérer les données.
                </p>

            </section>


            <section class="popup-section">

                <h3>Comment ça fonctionne ?</h3>

                <p>
                    Le ransomware peut entrer dans un système à travers une
                    pièce jointe malveillante, un logiciel vulnérable,
                    des identifiants compromis ou une autre cyberattaque.
                </p>

                <p>
                    Une fois présent sur le système, il peut rechercher les
                    fichiers importants et les chiffrer. Dans certaines
                    attaques, les cybercriminels volent également les données
                    avant de les chiffrer afin de faire pression sur la victime.
                </p>

            </section>


            <section class="popup-section">

                <h3>Exemple concret</h3>

                <p>
                    Une entreprise ouvre une pièce jointe malveillante reçue
                    par e-mail. Le programme installé commence ensuite à
                    chiffrer les documents présents sur plusieurs ordinateurs.
                </p>

                <p>
                    Les employés ne peuvent plus ouvrir leurs fichiers et un
                    message apparaît pour demander une rançon.
                </p>

            </section>


            <section class="popup-section">

                <h3>Conséquences</h3>

                <ul>
                    <li>Perte temporaire ou durable de l'accès aux fichiers.</li>
                    <li>Interruption de l'activité d'une entreprise.</li>
                    <li>Coûts importants liés à la récupération des données.</li>
                    <li>Vol potentiel de données confidentielles.</li>
                    <li>Atteinte à la réputation de l'organisation.</li>
                </ul>

            </section>


            <section class="popup-section protection">

                <h3>Comment se protéger ?</h3>

                <p>
                    Effectuez régulièrement des sauvegardes des données
                    importantes et conservez au moins une copie séparée du
                    réseau principal.
                </p>

                <p>
                    Maintenez également les systèmes et logiciels à jour,
                    utilisez des solutions de sécurité fiables et sensibilisez
                    les utilisateurs aux pièces jointes et liens suspects.
                </p>

            </section>

        `
    },


    malware: {

        titre: "Malware",

        contenu: `

            <section class="popup-section">

                <h3>Qu'est-ce que c'est ?</h3>

                <p>
                    Le terme <strong class="strong">malware</strong> désigne l'ensemble des
                    logiciels conçus pour effectuer des actions malveillantes
                    sur un ordinateur, un smartphone, un serveur ou un réseau.
                </p>

                <p>
                    Les virus, chevaux de Troie, logiciels espions et
                    ransomwares sont différents exemples de logiciels
                    malveillants.
                </p>

            </section>


            <section class="popup-section">

                <h3>Comment ça fonctionne ?</h3>

                <p>
                    Un malware peut être installé lorsqu'une victime ouvre un
                    fichier dangereux, télécharge un logiciel provenant d'une
                    source non fiable ou visite un site compromis.
                </p>

                <p>
                    Une fois installé, le programme peut espionner l'utilisateur,
                    voler des informations, modifier des fichiers ou permettre
                    à un attaquant de prendre le contrôle du système.
                </p>

            </section>


            <section class="popup-section">

                <h3>Exemple concret</h3>

                <p>
                    Un utilisateur télécharge une application présentée comme
                    un logiciel gratuit. Le programme semble fonctionner
                    normalement mais installe également un logiciel malveillant
                    en arrière-plan.
                </p>

                <p>
                    Le malware peut alors récupérer certaines informations
                    présentes sur l'appareil sans que l'utilisateur s'en rende
                    immédiatement compte.
                </p>

            </section>


            <section class="popup-section">

                <h3>Conséquences</h3>

                <ul>
                    <li>Vol de données personnelles.</li>
                    <li>Espionnage de l'utilisateur.</li>
                    <li>Ralentissement ou dysfonctionnement du système.</li>
                    <li>Vol d'identifiants.</li>
                    <li>Installation d'autres logiciels malveillants.</li>
                </ul>

            </section>


            <section class="popup-section protection">

                <h3>Comment se protéger ?</h3>

                <p>
                    Téléchargez vos logiciels uniquement depuis des sources
                    fiables et évitez les programmes provenant de sites
                    inconnus.
                </p>

                <p>
                    Maintenez votre système à jour et utilisez une solution
                    de sécurité capable de détecter les logiciels malveillants.
                </p>

            </section>

        `
    },


    ddos: {

        titre: "Attaque DDoS",

        contenu: `

            <section class="popup-section">

                <h3>Qu'est-ce que c'est ?</h3>

                <p>
                    Une attaque <strong>DDoS</strong> signifie
                    « Distributed Denial of Service », ou attaque par
                    déni de service distribué.
                </p>

                <p>
                    Son objectif est de rendre un site web, un serveur ou
                    un service informatique difficile, voire impossible,
                    à utiliser en le surchargeant de requêtes.
                </p>

            </section>


            <section class="popup-section">

                <h3>Comment ça fonctionne ?</h3>

                <p>
                    Les attaquants utilisent généralement un grand nombre
                    d'appareils connectés afin d'envoyer simultanément une
                    quantité importante de requêtes vers la cible.
                </p>

                <p>
                    Lorsque le volume de trafic dépasse les capacités du
                    serveur, celui-ci peut devenir très lent ou ne plus
                    répondre normalement aux utilisateurs légitimes.
                </p>

            </section>


            <section class="popup-section">

                <h3>Exemple concret</h3>

                <p>
                    Un site de commerce en ligne reçoit soudainement un
                    nombre extrêmement élevé de requêtes provenant de
                    nombreux appareils.
                </p>

                <p>
                    Les ressources du serveur sont progressivement saturées.
                    Les véritables clients rencontrent alors des difficultés
                    pour accéder au site ou effectuer leurs achats.
                </p>

            </section>


            <section class="popup-section">

                <h3>Conséquences</h3>

                <ul>
                    <li>Indisponibilité d'un site ou d'un service.</li>
                    <li>Ralentissement important des serveurs.</li>
                    <li>Perte de revenus pour une entreprise.</li>
                    <li>Dégradation de l'expérience utilisateur.</li>
                    <li>Atteinte à l'image de l'organisation.</li>
                </ul>

            </section>


            <section class="popup-section protection">

                <h3>Comment se protéger ?</h3>

                <p>
                    Les organisations peuvent utiliser des solutions
                    spécialisées dans la détection et le filtrage du trafic
                    malveillant.
                </p>

                <p>
                    Une infrastructure correctement dimensionnée et une
                    surveillance permanente du trafic permettent également
                    de réagir plus rapidement lorsqu'une attaque commence.
                </p>

            </section>

        `
    },


    "ingenierie-sociale": {

        titre: "Ingénierie sociale",

        contenu: `

            <section class="popup-section">

                <h3>Qu'est-ce que c'est ?</h3>

                <p>
                    L'<strong class="strong">ingénierie sociale</strong> est une technique
                    qui consiste à manipuler psychologiquement une personne
                    afin de l'amener à divulguer une information ou à effectuer
                    une action favorable à l'attaquant.
                </p>

                <p>
                    Contrairement à certaines attaques qui ciblent directement
                    une faille informatique, cette méthode exploite principalement
                    la confiance, la peur, la curiosité ou l'urgence.
                </p>

            </section>


            <section class="popup-section">

                <h3>Comment ça fonctionne ?</h3>

                <p>
                    L'attaquant peut se présenter comme un collègue, un
                    technicien informatique, un responsable ou un représentant
                    d'une entreprise connue.
                </p>

                <p>
                    Il cherche ensuite à créer une situation suffisamment
                    crédible pour convaincre sa victime de transmettre une
                    information ou d'effectuer une action.
                </p>

            </section>


            <section class="popup-section">

                <h3>Exemple concret</h3>

                <p>
                    Une personne reçoit un appel d'une personne prétendant
                    travailler pour le service informatique de son entreprise.
                </p>

                <p>
                    L'interlocuteur affirme qu'un problème de sécurité nécessite
                    une vérification immédiate et demande le mot de passe de
                    la victime.
                </p>

            </section>


            <section class="popup-section">

                <h3>Conséquences</h3>

                <ul>
                    <li>Vol d'informations confidentielles.</li>
                    <li>Compromission de comptes.</li>
                    <li>Fraudes financières.</li>
                    <li>Accès non autorisé à un réseau.</li>
                    <li>Propagation d'autres cyberattaques.</li>
                </ul>

            </section>


            <section class="popup-section protection">

                <h3>Comment se protéger ?</h3>

                <p>
                    Ne communiquez jamais un mot de passe ou une information
                    confidentielle simplement parce qu'une personne affirme
                    appartenir à un service officiel.
                </p>

                <p>
                    Vérifiez toujours l'identité de votre interlocuteur en
                    utilisant un moyen de contact officiel et indépendant.
                </p>

            </section>

        `
    },


    deepfake: {

        titre: "Deepfake",

        contenu: `

            <section class="popup-section">

                <h3>Qu'est-ce que c'est ?</h3>

                <p>
                    Un <strong class="strong">deepfake</strong> est un contenu numérique
                    généré ou modifié grâce à l'intelligence artificielle
                    afin de reproduire de manière réaliste l'apparence ou
                    la voix d'une personne.
                </p>

                <p>
                    Cette technologie peut être utilisée à des fins légitimes,
                    mais elle peut également être détournée pour tromper,
                    manipuler ou escroquer des victimes.
                </p>

            </section>


            <section class="popup-section">

                <h3>Comment ça fonctionne ?</h3>

                <p>
                    Des systèmes d'intelligence artificielle analysent des
                    images, des vidéos ou des enregistrements audio afin de
                    produire un contenu ressemblant à une personne réelle.
                </p>

                <p>
                    Le résultat peut donner l'impression qu'une personne
                    prononce des paroles ou réalise des actions qu'elle n'a
                    jamais réellement effectuées.
                </p>

            </section>


            <section class="popup-section">

                <h3>Exemple concret</h3>

                <p>
                    Un cybercriminel peut utiliser une imitation de la voix
                    d'un responsable d'entreprise pour demander à un employé
                    d'effectuer un transfert d'argent urgent.
                </p>

                <p>
                    L'employé peut croire que l'ordre vient réellement de
                    son supérieur alors que la voix a été artificiellement
                    générée ou manipulée.
                </p>

            </section>


            <section class="popup-section">

                <h3>Conséquences</h3>

                <ul>
                    <li>Fraudes financières.</li>
                    <li>Usurpation d'identité.</li>
                    <li>Diffusion de fausses informations.</li>
                    <li>Manipulation de victimes.</li>
                    <li>Atteinte à la réputation d'une personne.</li>
                </ul>

            </section>


            <section class="popup-section protection">

                <h3>Comment se protéger ?</h3>

                <p>
                    Ne considérez jamais une vidéo, une image ou un
                    enregistrement audio comme une preuve suffisante de
                    l'identité d'une personne.
                </p>

                <p>
                    En cas de demande inhabituelle, notamment lorsqu'elle
                    concerne de l'argent ou des informations sensibles,
                    vérifiez toujours la demande par un autre moyen de
                    communication.
                </p>

            </section>

        `
    }

};


/* =========================================
   OUVRIR LE POPUP
========================================= */

boutons.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const attaque = bouton.getAttribute("data-attaque");

        if (attaques[attaque]) {

            popupTitre.textContent = attaques[attaque].titre;

            popupTexte.innerHTML = attaques[attaque].contenu;

            popup.classList.add("active");

            document.body.style.overflow = "hidden";
        }

    });

});


/* =========================================
   FERMER LE POPUP
========================================= */

function fermerLaFenetre() {

    popup.classList.remove("active");

    document.body.style.overflow = "";

}


fermerPopup.addEventListener("click", fermerLaFenetre);


/* =========================================
   FERMER EN CLIQUANT EN DEHORS
========================================= */

popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        fermerLaFenetre();

    }

});


/* =========================================
   FERMER AVEC ESC
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fermerLaFenetre();

    }

});