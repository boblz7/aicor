<template>
  <div id="faq" class="faq-container">
    <div class="faq-content">
      <div class="text">
        <h2>FAQ</h2>

        <p>Frequently Asked Questions</p>
      </div>

      <div class="faq-items">
        <div class="faqs-one">
          <div
            v-for="(item, i) in faqItems1"
            :key="i"
            :class="[{ expanded: item.expanded }, 'item']"
          >
            <div
              :class="[{ expanded: item.expanded }, 'item-question']"
              @click="handleQuestionClick(item)"
            >
              <p>{{ item.question }}</p>
              <v-icon v-if="item.expanded">mdi-minus</v-icon>
              <v-icon v-else>mdi-plus</v-icon>
            </div>
            <v-expand-transition>
              <div v-if="item.expanded" class="item-answer">
                <p>{{ item.answer }}</p>
              </div>
            </v-expand-transition>
          </div>
        </div>

        <div class="faqs-two">
          <div
            v-for="(item, i) in faqItems2"
            :key="i"
            :class="[{ expanded: item.expanded }, 'item']"
          >
            <div
              :class="[{ expanded: item.expanded }, 'item-question']"
              @click="handleQuestionClick(item)"
            >
              <p>{{ item.question }}</p>
              <v-icon v-if="item.expanded">mdi-minus</v-icon>
              <v-icon v-else>mdi-plus</v-icon>
            </div>
            <v-expand-transition>
              <div v-if="item.expanded" class="item-answer">
                <p>{{ item.answer }}</p>
              </div>
            </v-expand-transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      faqItems1: [
        {
          question: 'WHAT IS ELI IDENT?',
          answer:
            'ELI IDENT is an Identification-as-a-Service (IaaS) and an Authentication-as-a-Service (Aaas) platform. Available as a mobile phone application.',
          expanded: false,
        },
        {
          question: 'HOW DOES ELI IDENT WORK?',
          answer:
            'An User initiates an identification process via ELI on a business platform, receives an e-mail with instructions, downloads the mobile application from the Appstore or Google Play Store, runs the identification process and after approval a personal ELI ID will be created.',
          expanded: false,
        },
        {
          question: 'WHICH SERVICES ARE PROVIDED BY ELI IDENT?',
          answer:
            'ELI IDENT offers OTP authentication, ID scan verification, KYC video verification. For more information visit: https://eli-ident.io/',
          expanded: false,
        },
        {
          question: 'CAN ELI IDENT BE INTEGRATED WITH THE EXISTING SYSTEM?',
          answer:
            'The integration is done through API in a very seamless process. For more information visit https://eli-ident.io/ or contact our support team.',
          expanded: false,
        },
        {
          question: 'HOW MANY BROWSERS DOES ELI IDENT SUPPORT?',
          answer:
            'ELI IDENT is supported across all browsers (updated to the latest versions).',
          expanded: false,
        },
        {
          question: "WHY CAN'T I COMPLETE MY IDENTIFICATION PROCESS?",
          answer:
            'Most of the verification process fails due to poor internet connection or bad picture quality (for example, too blurry or due to low lighting). Please be in a bright environment, use a phone with a good camera, and make sure you have a fast internet connection. You need to live in one of our supported countries to open an account with us. <br/> We can only accept valid, not damaged national IDs and passports.',
          expanded: false,
        },
        {
          question: 'WHICH COUNTRIES ARE SUPPORTED BY ELI IDENT?',
          answer:
            'All countries which can be chosen in the ELI Ident application. <br /> For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'CAN ELI IDENT BE INTEGRATED WITHIN AN EXISTING SYSTEM?',
          answer:
            'Yes, ELI Ident can be integrated in the fist via API integration or SDK integration.',
          expanded: false,
        },
        {
          question: 'WHICH SERVICES ARE PROVIDED BY ELI IDENT?',
          answer:
            'ELI Ident provides Identification-as-a-Service and Authentication-as-a-Service as a full platform. <br /> For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'WHICH DOCUMENTS ARE VERIFIED BY ELI IDENT?',
          answer:
            'In the first phase passport and national ID. <br /> For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'HOW MUCH TIME DOES ELI IDENT TAKES TO VERIFY?',
          answer:
            'The ELI Ident process takes just a few minutes. <br /> For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'WHAT IS THE VERIFICATION PROCESS?',
          answer: 'For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'WHAT KINDS OF VERIFICATION DOES ELI IDENT PROVIDE?',
          answer:
            'ELI IDENT offers OTP authentication, ID scan verification, KYC video verification. <br /> For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'HOW LONG DOES ELI IDENT HOLD INFORMATION FOR?',
          answer:
            'ELI IDENT stores user data on secured server infrastructures following all technical and regulative standards.',
          expanded: false,
        },
        {
          question: 'DOES ELI IDENT HAVE AN API/SDK?',
          answer: 'Yes, both integration methods are provided.',
          expanded: false,
        },
        {
          question: 'DOES ELI IDENT HAVE AN API/SDK?',
          answer: 'Yes, both integration methods are provided.',
          expanded: false,
        },
        {
          question: 'DOES ELI IDENT OFFER PRICING PACKAGES?',
          answer: 'For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question:
            'WHICH SECTORS/INDUSTRIES DOES ELI IDENT OFFER SERVICES TO?',
          answer: 'For further information visit: www.eli-ident.io .',
          expanded: false,
        },
        {
          question: 'HOW SECURE IS AICOR BANK APP?',
          answer:
            'Your payments and personal information are kept safe, and your security is our priority as we developed comprehensive anti-fraud and AML measurements.',
          expanded: false,
        },
        {
          question: 'HOW DOES AICOR BANK WORK?',
          answer:
            'Send and receive money, link credit cards and bank accounts. Choose from different payment methods and pay conveniently anytime and anywhere. Easily access your account balance and payment history. It’s easy for AICOR BANK holders to send and receive money. You just need an email address or phone number.',
          expanded: false,
        },
        {
          question: 'HOW TO GET PUSH MESSAGES in my AICOR BANK APP?',
          answer:
            'Receive notifications about incoming and outgoing payments in real-time. Respond fast and keep going with your important activities. If you aren’t receiving these messages, first check that notifications are enabled for both your phone and the app. Then try some of our troubleshooting suggestions, depending on your smartphone: For IOS: <br /> Delete the app and restart your smartphone. Download and install the latest version of the app from the Apple App Store and connect your smartphone again. Check whether you’re logged into your AICOR Bank app. Make sure messaging for the app has been activated in the general settings of your smartphone. For android: <br /> Delete the app and restart your smartphone. Download and install the latest version of the app from the Appstore or Google Play Store and connect your smartphone again. Go to your Account settings and activate notification by tapping App settings then Notifications.',
          expanded: false,
        },
        {
          question: 'HOW TO OPEN MY AICOR BANK ACCOUNT?',
          answer:
            "You can open an account in the app (on your smartphone) if you: <br /> are at least 18 years old <br /> are a resident of a supported country <br /> own a compatible smartphone <br /> hold a supported ID <br /> don't already have a AICOR account <br /> can verify yourself in one of our supported languages <br /><br /> Sign-up for AICOR Bank account by following these steps: <br /> After entering and confirming your email, you need to enter your personal phone number and verify it by entering the code you received via SMS. Next, you need to prove your identity with our quick verification process where you need to provide your valid ID and go through our liveliness check. After you finish all the steps of the necessary verification process you can use all AICOR Bank app features. If you'd like more information, contact us directly.",
          expanded: false,
        },
        {
          question: 'HOW CAN I PROTECT MY IDENTITY?',
          answer:
            'To protect your personal data, follow our guidelines: <br /> We will never ask you to prove your identity on behalf of other individuals or companies. Only complete the verification process if you want to open an AICOR Bank account for yourself. <br /> As the account owner, only you should create and have access to your login credentials. If you use login credentials that were given to you, these credentials may be used to reach your personal and legal information. <br /> We may ask for certain documents when your transaction is subject to a routine check. Only send valid documentation to verified AICOR email accounts. <br /> We will never ask for your username, password, or PIN codes outside the AICOR Bank app. Never provide this information on an external website or app, even if it looks AICOR related. <br /> Take care to monitor your financial statements. Make sure you recognize every transaction, no matter how small. <br /> If you received a suspicious request from a third party, or think your account may be compromised, please do not hesitate to contact us.',
          expanded: false,
        },
        {
          question: 'WHAT IS AICOR BANK?',
          answer:
            'AICOR BANK is the next-generation digital banking application including several financial and non-financial services like money transfer, money exchange, card payments, customer loyalty programs and its own lifestyle-services platform.',
          expanded: false,
        },
        {
          question: 'WHAT IS THE AICOR BANK APP?',
          answer: 'AICOR BANK will be available as a mobile application.',
          expanded: false,
        },
        {
          question: 'WHEN WILL AICOR BANK APP BE AVAILABLE?',
          answer:
            'AICOR plans to launch the AICOR BANK APP Beginning of 2022. For updates and more information subscribe for the AICOR Newsletter or follow AICOR on social media.',
          expanded: false,
        },
        {
          question: 'HOW TO GET STARTED USING AICOR BANK APP AFTER THE LAUNCH?',
          answer:
            '1.Download AICOR Bank app <br /> Get started with AICOR on your iOS or Android mobile device. You can download our app directly from the Google Play or App Store. <br /> 2.Create account <br /> It takes just a few minutes to sign up and verify your identity. <br /> 3.Pay and get paid <br /> Send and receive money, link credit cards and bank accounts. Choose from different payment methods and pay conveniently anytime and anywhere',
          expanded: false,
        },
        {
          question: 'ON WHAT DEVICES IS THE AICOR BANK MOBILE APP SUPPORTED?',
          answer:
            'AICOR BANK APP will be supported on both Android and IOS mobile devices with the latest system updates. You can download our app directly from the Google Play or App Store.',
          expanded: false,
        },
        {
          question: 'HOW TO MAKE A PAYMENT TO ANOTHER AICOR USER?',
          answer:
            'It’s easy for AICOR VOLET holders to send and receive money. You just need an email address or phone number and you are ready to go.',
          expanded: false,
        },
        {
          question: 'WHERE CAN I PAY WITH AICOR BANK APP?',
          answer:
            'At any platform or business where VISA and Mastercard payments are accepted.',
          expanded: false,
        },
        {
          question: 'WHAT ARE THE REQUIREMENTS TO USE AICOR BANK APP?',
          answer:
            'Being full-aged, neither listed on any Embargo or Sanction List nor listed on any POP list.',
          expanded: false,
        },
        {
          question: 'HOW SECURE IS AICOR BANK APP?',
          answer:
            'AICOR BANK APP follows all required technical standards published by Financial Authorities globally regarding Financial Institutions.',
          expanded: false,
        },
        {
          question: 'ARE THERE PAYMENT LIMITS WHEN PAYING WITH AICOR BANK APP?',
          answer:
            'The Limit overview can be found in the application and on the AICOR website after product launch.',
          expanded: false,
        },
        {
          question: 'ARE THERE TIME LIMITS WHEN PAYING WITH AICOR BANK APP?',
          answer:
            'The User will be notified in the application about such limits.',
          expanded: false,
        },
        {
          question: 'HOW DO I ADD MONEY TO MY AICOR BANK APP?',
          answer: 'By selecting the “Top-Up”-Option in the application.',
          expanded: false,
        },
        {
          question: 'WHY DO I NEED TO VERIFY MY IDENTITY?',
          answer: 'Just following instructions in the application.',
          expanded: false,
        },
        {
          question: 'HOW DO I VERIFY MY IDENTITY?',
          answer:
            'The User Identification will be done bei ELI Ident within the application.',
          expanded: false,
        },
        {
          question: 'WHAT COUNTRIES ARE SUPPORTED?',
          answer:
            'All countries supported by ELI Ident. For more information visit: www.eli-ident.io .',
          expanded: false,
        },
      ],
      faqItems2: [
        {
          question: 'WHAT FOREIGN EXCHANGE RATE WILL I GET?',
          answer:
            'The Exchange Rate overview can be found in the application and on the AICOR website after product launch.',
          expanded: false,
        },
        {
          question: 'WILL I BE CHARGED FOR EXCHANGING FOREIGN CURRENCIES?',
          answer:
            'Yes, fees will be shown and can be found in the Fee overview in the application and on the AICOR website after product launch.',
          expanded: false,
        },
        {
          question:
            'WHAT FIAT CURRENCIES ARE SUPPORTED FOR HOLDING AND EXCHANGE?',
          answer: 'Only these currencies which are shown in the application.',
          expanded: false,
        },
        {
          question: 'WHY HAS MY DEPOSIT FAILED?',
          answer:
            'That can happen because of several reasons. The actual reason will shown in the application or the User gets instructed to contact the support for further information.',
          expanded: false,
        },
        {
          question: 'WHY IS MY DEPOSIT STILL PENDING?',
          answer: 'The pending period depends on the funding source.',
          expanded: false,
        },
        {
          question: 'WHY WAS I CHARGED A FEE FOR MY DEPOSIT?',
          answer:
            'Deposit fees are related to the funding source. Exact fees can be found on the fee overview.',
          expanded: false,
        },
        {
          question: 'RECIPIENT HAS NOT RECEIVED THE MONEY?',
          answer:
            'Sometimes money transfers can take up to 3 days or even long in case of cross border payments. If any reason is causing the delay, further instructions will be shown in the application.',
          expanded: false,
        },
        {
          question: 'I WANT TO CANCEL A TRANSFER, HOW CAN I DO THAT?',
          answer:
            'By clicking on the “cancel” Button related to that transaction or by contacting the support. If the money has already left the system, then only a refund is possible.',
          expanded: false,
        },
        {
          question: 'WHY HAS MY TRANSFER FAILED?',
          answer:
            'Typically the reason will be shown in the application or the support has to be contacted.',
          expanded: false,
        },
        {
          question: 'WHY HAS MY TRANSFER BEEN DECLINED?',
          answer:
            'Typically the reason will be shown in the application or the support has to be contacted.',
          expanded: false,
        },
        {
          question: 'WHY IS MY TRANSFER STILL PENDING?',
          answer:
            'Typically the reason will be shown in the application or the support has to be contacted.',
          expanded: false,
        },
        {
          question: 'WHY WAS I CHARGED A FEE FOR MY TRANSFER?',
          answer:
            'Transfer fees are related to the type of transfer (instant or normal). Exact fees can be found on the fee overview, after product launch.',
          expanded: false,
        },
        {
          question: 'HOW TO REQUEST A PAYMENT WITH AICOR BANK?',
          answer:
            'Clicking on the “Transfer” Button in the application and just following further instructions.',
          expanded: false,
        },
        {
          question: 'HOW TO VIEW YOUR PAYMENT AND TRANSACTION HISTORY?',
          answer:
            'Clicking on the “Transfer HIstory” Button in the application and just following further instructions.',
          expanded: false,
        },
        {
          question: 'HOW TO MAKE A PAYMENT TO ANOTHER AICOR BANK USER?',
          answer:
            'Clicking on the “Transfer” Button in the application and just following further instructions.',
          expanded: false,
        },
        {
          question: 'HOW CAN I ADD A NEW BANK ACCOUNT?',
          answer:
            'Clicking on the “Profile” Button in the application and just following further instructions.',
          expanded: false,
        },
        {
          question: 'CAN I EDIT MY BANK ACCOUNT DETAILS?',
          answer:
            'If this bank account is added previously to the User Profile, then just clicking on the “Edit” Button related to that bank account is needed.',
          expanded: false,
        },
        {
          question: 'HOW DO I PAY A RECIPIENT THAT DOES NOT USE AICOR BANK?',
          answer:
            'Clicking on the “Transfer” Button in the application and just following further instructions.',
          expanded: false,
        },
        {
          question:
            'HOW LONG DOES IT TAKE FOR A PAYMENT TO REACH MY RECIPIENT?',
          answer:
            "The duration of a transfer is related to the type of transfer (instant or normal), the country of the recipient's bank and its technical possibilities. If the instant payment is chosen then the transfer takes usually just a few minutes and in case that the recipient is an AICOR BANK customer then instantly.",
          expanded: false,
        },
        {
          question:
            'IS THERE A FEE FOR MAKING PAYMENTS TO RECIPIENTS WHO ARE NOT AICOR BANK CUSTOMERS?',
          answer:
            'Transfer fees are related to the type of transfer (instant or normal). Exact fees can be found on the fee overview, after product launch.',
          expanded: false,
        },
        {
          question: 'CAN I REVERSE A TRANSACTION?',
          answer:
            'An initiated transaction can only be cancelled not reversed.',
          expanded: false,
        },
        {
          question: 'WHY IS MY ACCOUNT BLOCKED?',
          answer:
            'That suspicious behaviour of an User leads to the disabling of its account. If this happens, then the support has to be contacted to possibly enable the account again.',
          expanded: false,
        },
        {
          question: "HOW CAN I REOPEN MY ACCOUNT AFTER I'VE CANCELED IT?",
          answer:
            'Once an account is canceled the User has to pass the account opening process again.',
          expanded: false,
        },
        {
          question: 'HOW CAN I CANCEL MY ACCOUNT?',
          answer:
            'By clicking on “Profile” and selecting Profile Settings. Further instructions will be shown in the application.',
          expanded: false,
        },
        {
          question:
            'WILL MY ACCOUNT CLOSE IF I DO NOT USE IT FOR AN EXTENDED PERIOD OF TIME?',
          answer:
            'If no suspicious behaviour is recorded the account stays activated. After passing a year the renevial of the user identification is required.',
          expanded: false,
        },
        {
          question: 'WHAT ARE THE FEES ASSOCIATED WITH AICOR BANK ACCOUNT?',
          answer:
            'The fee overview can be found on in the application and on the AICOR website.',
          expanded: false,
        },
        {
          question:
            'CAN I USE THE SAME EMAIL ADDRESS FOR MORE THAN ONE ACCOUNT?',
          answer: 'No, only one EMail address per User is allowed.',
          expanded: false,
        },
        {
          question: 'HOW DO I RESET MY PHONE NUMBER?',
          answer:
            'By following instructions in the application or contacting the support.',
          expanded: false,
        },
        {
          question: 'HOW CAN I UPDATE/CHANGE MY ACCOUNT DETAILS?',
          answer: 'In the Profile Settings.',
          expanded: false,
        },
        {
          question: 'HOW CAN I UPDATE MY NAME?',
          answer: 'In the Profile Settings.',
          expanded: false,
        },
        {
          question: 'ON WHAT DEVICES IS THE AICOR BANK APP SUPPORTED?',
          answer:
            'In the first phase the AICOR BANK APP will be available for IOS and Android Users. For updates subscribe the newsletter or follow AICOR on social media.',
          expanded: false,
        },
        {
          question:
            'IF I WANT TO SIGN IN AS A DIFFERENT USER, HOW CAN I SWITCH ACCOUNTS?',
          answer:
            'By logging out of the application, other login information can be entered.',
          expanded: false,
        },
        {
          question: 'IS THE MOBILE APP AVAILABLE IN MY LANGUAGE?',
          answer:
            'The application will be available in the languages which can be chosen in the account opening process.',
          expanded: false,
        },
        {
          question: 'HOW CAN I SIGN TO MY ACCOUNT IF I FORGOT MY INFORMATION?',
          answer: 'By contacting the support.',
          expanded: false,
        },
        {
          question: 'WHAT SHOULD I DO IF I HAVE FORGOTTEN MY EMAIL ADDRESS?',
          answer: 'Contacting the support.',
          expanded: false,
        },
        {
          question: 'HOW DOES AICOR BANK STORES AND USE MY DATA?',
          answer:
            'AICOR BANK stores user data on secured server infrastructures following all technical and regulative standards.',
          expanded: false,
        },
        {
          question:
            'CAN AICOR BANK STAFF MONITOR MY ACCOUNT OR CONTROL MY TRANSACTIONS?',
          answer:
            'Regarding KYC standards all actions done by an User the Bank has to monitor and calculate a certain risk level of each.',
          expanded: false,
        },
        {
          question: 'HOW DO I SEE TRANSACTION DETAILS?',
          answer: 'By following instructions in the application.',
          expanded: false,
        },
        {
          question: 'HOW DO I SEE MY EXCHANGE HISTORY?',
          answer: 'By following instructions in the application.',
          expanded: false,
        },
      ],
    }
  },
  methods: {
    handleQuestionClick(item) {
      item.expanded = !item.expanded
      this.$forceUpdate()
    },
  },
}
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
.faq-container {
  padding-top: 100px;

  .faq-content {
    max-width: $max-screen-width;
    margin: 0 auto;

    .text {
      text-align: center;
      margin-bottom: 80px;
    }

    .faq-items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      .item {
        height: auto;
        padding: 30px;
        // padding-bottom: 0;
        border-bottom: 1px solid #eaf5ff;
        overflow: hidden;

        &.expanded {
          .item-question {
            padding-bottom: 25px;
          }
        }

        .item-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 300ms ease-in-out;
          cursor: pointer;

          p {
            font-size: 18px;
            color: $dark-blue;
            font-weight: 500;
          }

          > i {
            padding: 5px;
            color: $variant-blue;
            background: $variant-light-blue;
            border-radius: 50%;
          }
        }

        .item-answer {
          p {
            color: $variant-gray2;
            font-weight: 300;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .faq-container {
    .faq-content {
      .faq-items {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
