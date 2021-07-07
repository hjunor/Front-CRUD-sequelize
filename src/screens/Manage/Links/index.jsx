import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layouts/Manage";
import { connect } from "react-redux";

import {
  linkList,
  setLinkToRemove,
  linkRemove,
} from "../../../actions/LinksActions";
import {
  Container,
  Wrapper,
  IconEdit,
  IconDelete,
  ButtonIcon,
  Card,
  Label,
  Text,
  WrapperButton,
  LinkUp,
} from "./styles";
import Button from "../../../components/Button";
const Links = ({
  links,
  linkList,
  linkToRemove,
  linkRemove,
  setLinkToRemove,
  account,
}) => {
  useEffect(() => {
    linkList();
  }, [linkList]);

  const cancelDelete = (e) => setLinkToRemove(null);
  const confirmDelete = (e) => {
    if (linkToRemove) {
      linkRemove(linkToRemove);
    }
  };
  return (
    <Layout>
      <Container>
        {links && links.length
          ? links.map((link) => {
              const deleteClick = (e) => setLinkToRemove(link);

              return (
                <Wrapper key={link.id}>
                  <LinkUp href={link.url} target="_blank" rel="noreferrer">
                    <strong>{link.label}</strong>
                  </LinkUp>

                  <div>
                    <Link to={`/manage/links/edit/${link.id}`}>
                      <IconEdit size="24" />
                    </Link>
                    <ButtonIcon onClick={deleteClick}>
                      <IconDelete size="24" />
                    </ButtonIcon>
                  </div>
                </Wrapper>
              );
            })
          : null}
        {!!linkToRemove ? (
          <Card>
            <Label>Delete Confirmation!</Label>
            <Text>
              Are you sure you want do delete, this action cannot be undone?
            </Text>
            <hr />
            <WrapperButton>
              <Button width="40%" handler={cancelDelete} title="Cancel" />
              <Button width="40%" handler={confirmDelete} title="Delete" />
            </WrapperButton>
          </Card>
        ) : null}
      </Container>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
    account: state.account.account,
  };
};

export default connect(mapStateToProps, {
  linkList,
  setLinkToRemove,
  linkRemove,
})(Links);
