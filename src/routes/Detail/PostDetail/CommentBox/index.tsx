import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"

const UtterancesComponent = dynamic(
  () => {
    return import("./Utterances")
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import("./Cusdis")
  },
  { ssr: false }
)

// Dynamically import the Giscus component
const GiscusComponent = dynamic(
  () => import("./Giscus"), // Make sure the path matches your file structure
  { ssr: false } // Disable server-side rendering for this component
);


type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {CONFIG.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
      {CONFIG.cusdis.enable && (
        <CusdisComponent id={data.id} slug={data.slug} title={data.title} />
      )}
      {CONFIG.giscus.enable && <GiscusComponent />}
    </div>
  );
}

export default CommentBox
