import { GroupAutocompleteInput } from "../../components/GroupAutocomplete";
import { GroupPageWrapper } from "./style";

export const GroupsPage = () => {
    return(
       <GroupPageWrapper>
            <GroupAutocompleteInput></GroupAutocompleteInput>
       </GroupPageWrapper>
    );
}