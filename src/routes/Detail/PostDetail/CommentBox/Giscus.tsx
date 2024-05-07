import { useEffect } from "react";
import { CONFIG } from "site.config";
import styled from "@emotion/styled";
import useScheme from "src/hooks/useScheme"; // You may or may not need this depending on your theme needs
import { useRouter } from "next/router";

const Giscus: React.FC = () => {
  const [scheme] = useScheme(); // Optional: Use if you need theme-based adjustments
  const router = useRouter();

  useEffect(() => {
    const theme = scheme === 'light' ? 'noborder_light' : 'noborder_dark'; // Sets Giscus theme based on the blog theme
    const script = document.createElement("script");
    const anchor = document.getElementById("comments");
    if (!anchor) return;

    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", CONFIG.giscus.config.repo);
    script.setAttribute("data-repo-id", CONFIG.giscus.config.repoId);
    script.setAttribute("data-category", CONFIG.giscus.config.category);
    script.setAttribute("data-category-id", CONFIG.giscus.config.categoryId);
    script.setAttribute("data-mapping", CONFIG.giscus.config.mapping);
    script.setAttribute("data-strict", CONFIG.giscus.config.strict);
    script.setAttribute("data-reactions-enabled", CONFIG.giscus.config.reactionsEnabled);
    script.setAttribute("data-emit-metadata", CONFIG.giscus.config.emitMetadata);
    script.setAttribute("data-input-position", CONFIG.giscus.config.inputPosition);
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-lang", CONFIG.giscus.config.lang);

    anchor.appendChild(script);

    return () => {
      anchor.innerHTML = "";
    };
  }, [scheme, router]); // Adjust dependencies based on your needs

  return (
    <StyledWrapper id="comments">
      <div className="giscus-frame"></div>
    </StyledWrapper>
  );
};

export default Giscus;

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`;
