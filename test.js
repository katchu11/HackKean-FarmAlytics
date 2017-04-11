private static CellProcessor[] getProcessors() {

    final String emailRegex = "[a-z0-9\\._]+@[a-z0-9\\.]+"; // just an example, not very robust!

    final CellProcessor[] processors = new CellProcessor[] {
            new NotNull(), // firstName
            new NotNull(), // lastName
            new notNull(new ParseInt()),
            new notNull(new ParseInt()), // numberOfKids
            new notNull(new ParseInt()),
            new notNull(new ParseInt()),

         };

    return processors;
}