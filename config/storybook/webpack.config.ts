import { BuildPaths } from '../build/types/config';
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildCssLoaders } from "../build/loaders/BuildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {

   // Define paths for the project
   const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
   };


   // Push source directory to resolve modules
   config.resolve?.modules?.push(paths.src);

   // Add TypeScript file extensions
   config.resolve?.extensions?.push('.ts', '.tsx');

   // Push CSS loaders to module rules
   config.module?.rules?.push(BuildCssLoaders(true));
   if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
         if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
         }
         return rule;
      });
   }
   config.module?.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   });

   config.plugins?.push(new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
   }))

   return config;
};
