import streamlit as st

st.header("Our New Home")
st.markdown( "  ")

fields,  spacer,  home = st.columns([ 2, 1, 3])

with fields:
    st.markdown("**Legacy System Fields**")
    for  field in ['first_name', 'Last_name', 'address_1', 'address_2', 'city', 'state', 'zip_code',
                'email', 'notes', 'is_volunteer', '2020-did-attend', 'occupation', 'biggest-donation']:
        st.write( field.strip())

with home:
    st.markdown("**Second Floor**")
    st.image("condo-floorplan.png")

hide_footer_style = """
    <style>
     footer {visibility: hidden;}  
    </style>
    """
st.markdown(hide_footer_style, unsafe_allow_html=True)