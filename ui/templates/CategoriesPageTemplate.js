import { CategoryRow } from "@/molecules";
import { ProductList } from "@/organisms";

const CategoriesPageTemplate = () => (
  <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
    <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20">
      <div className="sticky hidden h-full lg:pt-4 shrink-0 lg:block w-80 xl:w-96 pr-16">
        <div className="space-y-10">
          <div className="block">
            <h3 class="text-brand-dark text-15px sm:text-base font-semibold mb-5 -mt-1">
              Categories
            </h3>
            <div className="max-h-full overflow-hidden border rounded border-border-base">
              <CategoryRow />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:pt-4 lg:4 xl:8 lg:-mt-1">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-end w-full lg:justify-between">
            <div class="shrink-0 text-brand-dark font-medium text-15px leading-4 md: md:rtl:ml-6 hidden lg:block mt-0.5">
              2,683 Items Found
            </div>
            <div className="relative  rtl:mr-2 lg: lg:rtl:mr-0 min-w-[160px]">
              sort
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5">
          <ProductList />
        </div>
      </div>
    </div>
  </div>
);

export default CategoriesPageTemplate;
