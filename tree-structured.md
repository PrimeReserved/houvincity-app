# Directory Structure
houvincity-app/
├── app/
│   app/
│   ├── (admin)/
│   │   (admin)/
│   │   └── studio/
│   │       studio/
│   │       └── [[...index]]/
│   │           [[...index]]/
│   │           ├── head.tsx
│   │           └── page.tsx
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── api/
│   │   api/
│   │   ├── disable-draft/
│   │   │   disable-draft/
│   │   │   └── route.ts
│   │   ├── draft/
│   │   │   draft/
│   │   │   └── route.ts
│   │   └── newsletter/
│   │       newsletter/
│   │       └── route.ts
│   ├── apple-touch-icon.png
│   ├── custom.css
│   ├── error.tsx
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── global-error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robot.ts
│   ├── sitemap.ts
│   ├── site.webmanifest
│   └── (user)/
│       (user)/
│       ├── about/
│       │   about/
│       │   └── page.tsx
│       ├── blog/
│       │   blog/
│       │   ├── page.tsx
│       │   └── [slug]/
│       │       [slug]/
│       │       └── page.tsx
│       ├── docs/
│       │   docs/
│       │   ├── architecture-and-system-design/
│       │   │   architecture-and-system-design/
│       │   │   └── page.tsx
│       │   ├── deployment/
│       │   │   deployment/
│       │   │   └── page.tsx
│       │   ├── development-workflow-and-processes/
│       │   │   development-workflow-and-processes/
│       │   │   └── page.tsx
│       │   ├── layout.tsx
│       │   ├── overview/
│       │   │   overview/
│       │   │   └── page.tsx
│       │   ├── page.tsx
│       │   ├── performance-and-scalability/
│       │   │   performance-and-scalability/
│       │   │   └── page.tsx
│       │   ├── security-and-data-privacy/
│       │   │   security-and-data-privacy/
│       │   │   └── page.tsx
│       │   ├── technology-stack/
│       │   │   technology-stack/
│       │   │   └── page.tsx
│       │   ├── third-party-integrations/
│       │   │   third-party-integrations/
│       │   │   └── page.tsx
│       │   └── user-interface/
│       │       user-interface/
│       │       └── page.tsx
│       ├── faqs/
│       │   faqs/
│       │   └── page.tsx
│       ├── news/
│       │   news/
│       │   ├── page.tsx
│       │   └── [slug]/
│       │       [slug]/
│       │       └── page.tsx
│       ├── privacy/
│       │   privacy/
│       │   └── page.tsx
│       ├── property/
│       │   property/
│       │   ├── page.tsx
│       │   └── [slug]/
│       │       [slug]/
│       │       └── page.tsx
│       ├── search-landing-page/
│       │   search-landing-page/
│       │   └── page.tsx
│       ├── services/
│       │   services/
│       │   ├── page.tsx
│       │   └── [slug]/
│       │       [slug]/
│       │       └── page.tsx
│       └── terms-and-conditions/
│           terms-and-conditions/
│           └── page.tsx
├── babel.config.js
├── components/
│   components/
│   ├── About/
│   │   About/
│   │   └── Founders.tsx
│   ├── Blog/
│   │   Blog/
│   │   ├── Cards/
│   │   │   Cards/
│   │   │   ├── AuthorProfile.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogDetailPost.tsx
│   │   │   ├── DetailedCard.tsx
│   │   │   ├── DetailedNews.tsx
│   │   │   ├── DetailedRecentPost.tsx
│   │   │   ├── NewsCard.tsx
│   │   │   ├── NewsDetailPost.tsx
│   │   │   ├── NewsPost.tsx
│   │   │   ├── RecentPostCard.tsx
│   │   │   └── RichTextComponents.tsx
│   │   ├── DetailedSocial.tsx
│   │   ├── Pagination.jsx
│   │   ├── PostSkeleton.tsx
│   │   ├── README.md
│   │   ├── RecentPostLoading.tsx
│   │   ├── SocialShare.tsx
│   │   └── TruncateText.tsx
│   ├── Buttons/
│   │   Buttons/
│   │   ├── BtnArrowIcon.tsx
│   │   ├── Button.tsx
│   │   ├── IconButtonHref.tsx
│   │   ├── IconButton.tsx
│   │   ├── README.md
│   │   └── ScrollToContactButton.tsx
│   ├── CustomLoading.tsx
│   ├── ErrorBoundary.tsx
│   ├── Faqs/
│   │   Faqs/
│   │   └── data/
│   │       data/
│   │       └── Faqs.ts
│   ├── Footer/
│   │   Footer/
│   │   └── FooterHome.tsx
│   ├── Header/
│   │   Header/
│   │   ├── HeaderHome.tsx
│   │   ├── HeaderOther.tsx
│   │   └── menuData.tsx
│   ├── Hero/
│   │   Hero/
│   │   ├── Hero.tsx
│   │   └── README.md
│   ├── LandingPage/
│   │   LandingPage/
│   │   ├── AboutProperty.tsx
│   │   ├── BlogHomePage.tsx
│   │   ├── Card.tsx
│   │   ├── FilterSearchHomePage.tsx
│   │   ├── Hero.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Review.tsx
│   │   ├── SearchHomePage.tsx
│   │   └── SearchLandingPage.tsx
│   ├── LiveVisualEditing.tsx
│   ├── Logo.tsx
│   ├── mdx/
│   │   mdx/
│   │   ├── Body.tsx
│   │   ├── data.ts
│   │   ├── NextPage.tsx
│   │   ├── NextWrapper.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── sideMenu.ts
│   │   ├── SubTitle.tsx
│   │   └── Title.tsx
│   ├── Newsletter/
│   │   Newsletter/
│   │   ├── Newsletter.tsx
│   │   └── README.md
│   ├── NumberCount/
│   │   NumberCount/
│   │   ├── NumberCount.tsx
│   │   └── README.md
│   ├── PostPreview.tsx
│   ├── PostsPreview.tsx
│   ├── Privacy/
│   │   Privacy/
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── Property/
│   │   Property/
│   │   ├── ContactUsBtn.tsx
│   │   ├── Houses.tsx
│   │   ├── Land.tsx
│   │   ├── PropertyDetailed.tsx
│   │   ├── PropertyListing.tsx
│   │   ├── SearchPropety.tsx
│   │   └── YoutubeEmbed.tsx
│   ├── README.md
│   ├── ScrollToTop/
│   │   ScrollToTop/
│   │   ├── index.tsx
│   │   └── README.md
│   ├── Services/
│   │   Services/
│   │   ├── CustomerTestimony.tsx
│   │   ├── data/
│   │   │   data/
│   │   │   ├── service.ts
│   │   │   └── testimony.ts
│   │   ├── ServiceBox.tsx
│   │   └── Services.tsx
│   ├── Socials/
│   │   Socials/
│   │   ├── DetailedSocialLink.tsx
│   │   ├── SocialLink.tsx
│   │   └── SocialLogos.tsx
│   ├── StudioNabar.tsx
│   ├── Typography/
│   │   Typography/
│   │   ├── StyledHeading.tsx
│   │   └── StyledText.tsx
│   └── UnderConstruction.tsx
├── context/
│   context/
│   ├── PropertyContext.ts
│   └── PropertyProvider.tsx
├── coverage/
│   coverage/
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov.info
│   └── lcov-report/
│       lcov-report/
│       ├── base.css
│       ├── block-navigation.js
│       ├── favicon.png
│       ├── Hero/
│       │   Hero/
│       │   ├── Hero.tsx.html
│       │   └── index.html
│       ├── index.html
│       ├── prettify.css
│       ├── prettify.js
│       ├── sort-arrow-sprite.png
│       ├── sorter.js
│       └── Typography/
│           Typography/
│           ├── index.html
│           ├── StyledHeading.tsx.html
│           └── StyledText.tsx.html
├── interfaces/
│   interfaces/
│   ├── IBlogCardData.ts
│   ├── IconButtonHrefProps.ts
│   ├── IErrorBoundary.ts
│   ├── IHeroProps.ts
│   └── ISocialLinkProps.ts
├── jest.config.ts
├── jest-setup.ts
├── jest.setup.ts
├── lib/
│   lib/
│   └── data.ts
├── markdown/
│   markdown/
│   ├── architecture/
│   │   architecture/
│   │   └── system-design-architecture.mdx
│   ├── dashboard.mdx
│   ├── deployment/
│   │   deployment/
│   │   └── deployment-and-infrastructure.mdx
│   ├── development-workflow-and-processes/
│   │   development-workflow-and-processes/
│   │   └── development-workflow-and-processes.mdx
│   ├── overview/
│   │   overview/
│   │   └── overview.mdx
│   ├── performance-and-scalability/
│   │   performance-and-scalability/
│   │   └── performance-and-scalability.mdx
│   ├── security-and-data-privacy/
│   │   security-and-data-privacy/
│   │   └── security-and-data-privacy.mdx
│   ├── technology-stack/
│   │   technology-stack/
│   │   └── stack.mdx
│   ├── thirdParty/
│   │   thirdParty/
│   │   └── third-party-integrations.mdx
│   ├── user-interface/
│   │   user-interface/
│   │   └── user-interface.mdx
│   └── welcome.mdx
├── mdx-components.tsx
├── next.config.js
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── print_tree.sh
├── public/
│   public/
│   ├── 404-error.png
│   ├── images/
│   │   images/
│   │   ├── about/
│   │   │   about/
│   │   │   ├── about-section.png
│   │   │   └── founders/
│   │   │       founders/
│   │   │       ├── Challenges-and-Opportunities-in-Civil-Engineering-Addressing-Environmental-and-Safety-Concerns
│   │   │       ├── 1.png
│   │   │       ├── founder_one.png
│   │   │       ├── founder_three.png
│   │   │       └── founder_two.png
│   │   ├── blog/
│   │   │   blog/
│   │   │   ├── ArrowRightWhite.svg
│   │   │   ├── Calendar.svg
│   │   │   ├── Ellipse
│   │   │   ├── 7.svg
│   │   │   ├── Hero
│   │   │   ├── section.png
│   │   │   ├── home.svg
│   │   │   ├── Icon/
│   │   │   │   Icon/
│   │   │   │   ├── Calendar2.svg
│   │   │   │   ├── Group.svg
│   │   │   │   ├── path1009.svg
│   │   │   │   ├── path1165.svg
│   │   │   │   └── Vector.svg
│   │   │   ├── Key.svg
│   │   │   ├── Money.svg
│   │   │   ├── news1.svg
│   │   │   ├── news2.svg
│   │   │   ├── news3.svg
│   │   │   ├── People.svg
│   │   │   ├── plant.svg
│   │   │   ├── Real
│   │   │   ├── estate.svg
│   │   │   ├── Rectangle
│   │   │   ├── 23858.svg
│   │   │   ├── Rectangle
│   │   │   ├── 23861.svg
│   │   │   └── Vector.svg
│   │   ├── faqs/
│   │   │   faqs/
│   │   │   └── faqs.png
│   │   ├── landingPage/
│   │   │   landingPage/
│   │   │   ├── land1.png
│   │   │   ├── land2.png
│   │   │   ├── land3.png
│   │   │   ├── Rectangle
│   │   │   ├── 23803.png
│   │   │   ├── Union.png
│   │   │   └── woman.jpeg
│   │   ├── property/
│   │   │   property/
│   │   │   ├── Bed.svg
│   │   │   ├── Detail1.svg
│   │   │   ├── Detail2.svg
│   │   │   ├── Detail3.png
│   │   │   ├── Detail3.svg
│   │   │   ├── Detail4.png
│   │   │   ├── Detail4.svg
│   │   │   ├── house1.svg
│   │   │   ├── house2.svg
│   │   │   ├── house3.svg
│   │   │   ├── house4.svg
│   │   │   ├── house5.svg
│   │   │   ├── house6.png
│   │   │   ├── house7.svg
│   │   │   ├── house8.svg
│   │   │   ├── house9.svg
│   │   │   ├── Land1.png
│   │   │   ├── Land1.svg
│   │   │   ├── Land2.svg
│   │   │   ├── Land3.svg
│   │   │   ├── Land4.svg
│   │   │   ├── land_four.jpeg
│   │   │   ├── land_one.jpeg
│   │   │   ├── land.svg
│   │   │   ├── land_three.jpeg
│   │   │   ├── land_two.jpeg
│   │   │   ├── property.png
│   │   │   ├── Rectangle
│   │   │   ├── 23837.png
│   │   │   ├── Rectangle
│   │   │   ├── 23838.png
│   │   │   ├── search.svg
│   │   │   └── Vector.svg
│   │   ├── services/
│   │   │   services/
│   │   │   ├── image/
│   │   │   │   image/
│   │   │   │   ├── construction-banner.png
│   │   │   │   ├── construction.png
│   │   │   │   ├── consultancy-banner.png
│   │   │   │   ├── consultancy.png
│   │   │   │   ├── Image2.svg
│   │   │   │   ├── Image.png
│   │   │   │   ├── property-agency.png
│   │   │   │   ├── property-management-banner.png
│   │   │   │   ├── property-management.png
│   │   │   │   ├── real-estate-development.png
│   │   │   │   └── real-estate-dev.png
│   │   │   └── services.png
│   │   └── socials/
│   │       socials/
│   │       ├── Instagram.png
│   │       ├── mingcute_linkedin-line.png
│   │       ├── path1009.svg
│   │       ├── path1165.svg
│   │       ├── Vector.png
│   │       ├── Vector.svg
│   │       ├── X.png
│   │       └── youtube.png
│   ├── logo.svg
│   ├── next.svg
│   ├── server-rror.png
│   └── vercel.svg
├── README.md
├── sanity/
│   sanity/
│   ├── client.ts
│   ├── env.ts
│   ├── lib/
│   │   lib/
│   │   ├── client.ts
│   │   ├── image.ts
│   │   ├── preview.ts
│   │   ├── queries.ts
│   │   ├── store.ts
│   │   └── token.ts
│   ├── schema.ts
│   └── schemaTypes/
│       schemaTypes/
│       ├── author.ts
│       ├── blockContent.ts
│       ├── category.ts
│       ├── news.ts
│       ├── post.ts
│       ├── property.ts
│       ├── subscription.ts
│       └── testimony.ts
├── sanity.cli.ts
├── sanity.config.ts
├── tailwind.config.ts
├── __tests__/
│   __tests__/
│   ├── Header.test.tsx
│   ├── Hero.test.tsx
│   └── __snapshots__/
│       __snapshots__/
│       └── Hero.test.tsx.snap
├── theme.ts
├── tree-structured.md
├── tsconfig.json
├── types/
│   types/
│   └── menu.ts
├── typings.d.ts
└── utils/
    utils/
    └── helper-functions/
        helper-functions/
        └── resetError.ts
